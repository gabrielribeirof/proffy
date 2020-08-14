import express from 'express';

import SessionController from './controllers/session.controller';
import UsersController from './controllers/users.controller';
import ClassesController from './controllers/classes.controller';
import ConnectionsController from './controllers/connections.controller';

import AuthMiddleware from './middlewares/auth.middleware';

const routes = express.Router();

routes.post('/login', SessionController.create);

routes.post('/users', AuthMiddleware, UsersController.create);

routes.get('/classes', ClassesController.index);
routes.post('/classes', AuthMiddleware, ClassesController.create);

routes.get('/connections', ConnectionsController.index);
routes.post('/connections', ConnectionsController.create);

export default routes;
