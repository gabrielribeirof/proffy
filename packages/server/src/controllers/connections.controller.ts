import { Request, Response } from 'express';
import AppError from '../errors/app.error';

import db from '../database/connection';

export default class ConnectionsController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const totalConnections = await db('connections').count('* as total');

      const { total } = totalConnections[0];

      return response.json({ total });
    } catch (err) {
      throw new AppError('Unexpected error when trying get connections', 400);
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    try {
      await db('connections').insert({
        user_id,
      });

      return response.status(201).send();
    } catch (err) {
      throw new AppError('Unexpected error when creating new connection', 400);
    }
  }
}
