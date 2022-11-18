import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post(
  '/',
  (req, res, next) => new CarController(req, res, next).newCar(),
);
carRouter.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).updateCar(),
);
carRouter.get(
  '/',
  (req, res, next) => new CarController(req, res, next).findAll(),
);
carRouter.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

export default carRouter;