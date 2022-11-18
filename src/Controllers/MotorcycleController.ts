import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
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
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (err: any) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async newMotorcycle() {
    const { model,
      year,
      color,
      buyValue,
      category,
      engineCapacity } = this.req.body;
    const motorcycleData: IMotorcycle = {
      model,
      year,
      color,
      buyValue,
      category,
      engineCapacity,
    };
    try {
      const newMotorcycle = await this.service.newMotorcycle(motorcycleData);
      return this.res.status(201).json(newMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }
  public async updateMotorcycle() {
    const { model,
      year,
      color,
      buyValue,
      category,
      engineCapacity, status } = this.req.body;
    const motorcycleData: IMotorcycle = {
      model,
      year,
      color,
      buyValue,
      category,
      engineCapacity,
      status,
    };
    const { id } = this.req.params;
    try {
      const updateMotorcycle = await this.service.updateMotorcycle(id, motorcycleData);
      if (updateMotorcycle) {
        return this.res.status(200).json(updateMotorcycle);
      }
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (err: any) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}