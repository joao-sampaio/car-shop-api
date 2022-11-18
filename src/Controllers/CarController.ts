import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async newCar() {
    const { model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty } = this.req.body;
    const carData: ICar = {
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty,
    };
    try {
      const newCar = await this.service.newCar(carData);
      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }
}