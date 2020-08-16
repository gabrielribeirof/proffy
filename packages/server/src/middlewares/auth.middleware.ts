import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import AppError from '../errors/app.error';
import authConfig from '../config/auth.config';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: number;
}

export default (
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void => {
  const { authorization } = request.headers;

  try {
    if (!authorization) {
      return response.status(401).json({
        error: 'Token not provided',
      });
    }

    const parts = authorization.split(' ');
    const [scheme, token] = parts;

    if (parts.length !== 2) {
      return response.status(401).json({
        error: 'Token error',
      });
    }

    if (!/^Bearer$/i.test(scheme)) {
      return response.status(401).json({
        error: 'Token malformatted',
      });
    }

    const decodedPayload = jwt.verify(token, authConfig.jwt.secret);

    const { sub } = decodedPayload as ITokenPayload;

    request.payload = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError('Unexpected error in authentication', 400);
  }
};
