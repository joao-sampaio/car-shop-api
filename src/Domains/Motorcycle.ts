import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(
    motorcycleData: IMotorcycle,
  ) {
    super(motorcycleData);
    this.category = motorcycleData.category;
    this.engineCapacity = motorcycleData.engineCapacity;
  }
}