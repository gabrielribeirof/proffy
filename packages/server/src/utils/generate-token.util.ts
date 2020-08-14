import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth.config';

export function generateToken(user_id: string): string {
  const { secret, expiresIn } = authConfig.jwt;

  return sign({}, secret, {
    subject: String(user_id),
    expiresIn,
  });
}
