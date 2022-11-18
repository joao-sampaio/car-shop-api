import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    carData: ICar,
  ) {
    super(carData);
    this.doorsQty = carData.doorsQty;
    this.seatsQty = carData.seatsQty;
  }
}