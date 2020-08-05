import express from 'express';

import ClassesController from './controllers/classes.controller';
import ConnectionsController from './controllers/connections.controller';

const routes = express.Router();

routes.get('/classes', ClassesController.index);
routes.post('/classes', ClassesController.create);

routes.get('/connections', ConnectionsController.index);
routes.post('/connections', ConnectionsController.create);

export default routes;
