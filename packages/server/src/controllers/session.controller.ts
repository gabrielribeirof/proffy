import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { generateToken } from '../utils/generate-token.util';

import db from '../database/connection';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;

    try {
      if (!authorization) {
        return response.status(401).json({
          error: 'Credentials not provided',
        });
      }

      const parts = authorization.split(' ');
      const [scheme, hash] = parts;

      if (parts.length !== 2) {
        return response.status(401).json({
          error: 'Credentials error',
        });
      }

      if (!/^Basic$/i.test(scheme)) {
        return response.status(401).json({
          error: 'Credentials malformatted',
        });
      }

      const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

      const user = await db('users').where('email', email).select('id', 'password');

      if (!user[0]) {
        return response.status(401).json({
          error: 'User not found',
        });
      }

      if (!await bcrypt.compare(password, user[0].password)) {
        return response.status(401).json({
          error: 'Invalid password',
        });
      }

      user[0].password = undefined;

      return response.json({
        token: generateToken(user[0].id),
      });
    } catch (err) {
      return response.status(400).json({
        error: 'Unexpected error when trying to login',
      });
    }
  },
};
