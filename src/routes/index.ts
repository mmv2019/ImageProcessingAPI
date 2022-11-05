import express from 'express';
import images from './api/RouteImage';
import RouterListImages from './api/RouterListImages';

const Listrouters = express.Router();

Listrouters.use('/imageAPI', images);
Listrouters.use('/listImagesAPI', RouterListImages);

export default Listrouters;
