import express from 'express';

import images from './api/pictures';
import guidance from './api/guidance';

const routes = express.Router();

routes.use('', guidance);
routes.use('/pictures', images);

export default routes;
