import { Request, Response } from 'express';
import db from '../database/connection';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const totalConnections = await db('connections').count('* as total');

      const { total } = totalConnections[0];

      return response.json({ total });
    } catch (err) {
      return response.status(400).json({
        error: 'Unexpected error when trying get connections',
      });
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    try {
      await db('connections').insert({
        user_id,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        error: 'Unexpected error when creating new connection',
      });
    }
  },
};
