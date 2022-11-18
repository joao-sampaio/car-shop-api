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

  public async findAll() {
    try {
      const query = await this.service.findAll();
      return this.res.status(200).json(query);
    } catch (err: any) {
      return this.res.status(500).json({ message: err.message });
    }
  }
  public async findById() {
    const { id } = this.req.params;
    try {
      const query = await this.service.findById(id);
      if (query) {
        return this.res.status(200).json(query);
      }
      return this.res.status(404).json({ message: 'Car not found' });
    } catch (err: any) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
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