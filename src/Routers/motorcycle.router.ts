import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).newMotorcycle(),
);
motorcycleRouter.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycle(),
);
motorcycleRouter.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);
motorcycleRouter.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

export default motorcycleRouter;