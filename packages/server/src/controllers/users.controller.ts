import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { generateToken } from '../utils/json-web-token.util';

import db from '../database/connection';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      avatar,
    } = request.body;

    const passwordHash = await bcrypt.hash(password, 8);

    try {
      const emailExists = await db('users').where('email', email);

      if (emailExists[0]) {
        return response.status(400).json({
          error: 'Email already used',
        });
      }

      const insertedUsersIds = await db('users').insert({
        name,
        email,
        password: passwordHash,
        avatar,
      });

      const user_id = insertedUsersIds[0];

      return response.status(201).send({
        token: generateToken({
          data: {
            id: user_id,
          },
        }),
      });
    } catch (err) {
      return response.status(400).json({
        error: 'Unexpected error when creating new user',
      });
    }
  },
};
