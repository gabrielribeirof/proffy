import jwt from 'jsonwebtoken';

interface PayloadData {
  data: {
    id: number
  };
}

export function generateToken(payload: PayloadData): string {
  return jwt.sign(payload, process.env.APP_SECRET, {
    expiresIn: 86400,
  });
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function verifyToken(token: string): string | object {
  return jwt.verify(token, process.env.APP_SECRET);
}
