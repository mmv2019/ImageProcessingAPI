import express from 'express';
import images from './api/RouteImage';

const routes = express.Router();

routes.use('/imageAPI', images);

export default routes;
