import 'dotenv/config';

import express, { Request, Response, Express } from 'express';
import cors from 'cors';

import AppError from './errors/app.error';
import routes from './routes';

class App {
  server: Express

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use((err: Error, request: Request, response: Response) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }

      return response.status(500).json({
        sattus: 'error',
        message: 'Internal server error',
      });
    });
  }
}

export default new App().server;
