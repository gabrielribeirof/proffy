import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import AppError from '../errors/app.error';
import { generateToken } from '../utils/generate-token.util';

import db from '../database/connection';

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      avatar,
    } = request.body;

    try {
      const passwordHash = await bcrypt.hash(password, 8);

      const emailExists = await db('users').where('email', email);

      if (emailExists[0]) {
        throw new AppError('Email already used', 400);
      }

      const insertedUsersIds = await db('users').insert({
        name,
        email,
        password: passwordHash,
        avatar,
      });

      const user_id = insertedUsersIds[0];
      return response.status(201).send({
        token: generateToken(String(user_id)),
      });
    } catch (err) {
      throw new AppError('Unexpected error when creating new user', 400);
    }
  }
}
