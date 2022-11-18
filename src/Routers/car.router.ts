import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post(
  '/',
  (req, res, next) => new CarController(req, res, next).newCar(),
);

export default carRouter;