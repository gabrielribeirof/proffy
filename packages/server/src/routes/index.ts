import express from 'express';

import SessionsController from '../controllers/sessions.controller';
import UsersController from '../controllers/users.controller';
import ClassesController from '../controllers/classes.controller';
import ConnectionsController from '../controllers/connections.controller';

import authMiddleware from '../middlewares/auth.middleware';

const sessionsController = new SessionsController();
const usersController = new UsersController();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

const routes = express.Router();

routes.post('/login', sessionsController.create);

routes.post('/users', authMiddleware, usersController.create);

routes.get('/classes', classesController.index);
routes.post('/classes', authMiddleware, classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
