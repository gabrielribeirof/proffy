import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import AppError from '../errors/app.error';
import { generateToken } from '../utils/generate-token.util';

import db from '../database/connection';

export default class SessionsControllers {
  async create(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;

    try {
      if (!authorization) {
        throw new AppError('Credentials not provided', 401);
      }

      const parts = authorization.split(' ');
      const [scheme, hash] = parts;

      if (parts.length !== 2) {
        throw new AppError('Credentials error', 401);
      }

      if (!/^Basic$/i.test(scheme)) {
        throw new AppError('Credentials malformatted', 401);
      }

      const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

      const user = await db('users').where('email', email).select('id', 'password');

      if (!user[0]) {
        throw new AppError('User not found', 401);
      }

      if (!await bcrypt.compare(password, user[0].password)) {
        throw new AppError('Invalid password', 401);
      }

      user[0].password = undefined;

      return response.json({
        token: generateToken(user[0].id),
      });
    } catch (err) {
      throw new AppError('Unexpected error when trying to login', 400);
    }
  }
}
