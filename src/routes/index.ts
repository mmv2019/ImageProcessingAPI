import express from 'express';
import images from './api/RouteImage';
import RouterListImages from './api/RouterListImages';

const routes = express.Router();

routes.use('/imageAPI', images);
routes.use('/listImagesAPI', RouterListImages);

export default routes;
