import { Request, Response } from 'express';

import convertHourToMinutes from '../utils/convert-hour-to-minutes.util';

import db from '../database/connection';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const filters = request.query;

    try {
      if (!filters.week_day || !filters.subject || !filters.time) {
        return response.status(400).json({
          error: 'Missing filters to list classes',
        });
      }

      const subject = filters.subject as string;
      const week_day = filters.week_day as string;
      const time = filters.time as string;

      const timeInMinutes = convertHourToMinutes(time);

      const classes = await db('classes')
        .whereExists(db.select('*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]))
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.name', 'users.avatar', 'users.bio', 'users.whatsapp']);

      return response.json(classes);
    } catch (err) {
      return response.status(400).json({
        error: 'Unexpected error when trying get classes',
      });
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    const {
      subject,
      cost,
      schedule,
    } = request.body;

    const trx = await db.transaction();

    try {
      const user = await trx('users').where('id', request.payload.id);
      const user_id = user[0].id;

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });
      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      }));

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      return response.status(201).send();
    } catch (err) {
      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error when creating new class',
      });
    }
  },
};
