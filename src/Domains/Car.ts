import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  // doorsQty: number;
  // seatsQty: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    carData: ICar,
  ) {
    this.model = carData.model;
    this.year = carData.year;
    this.color = carData.color;
    this.buyValue = carData.buyValue;
    this.doorsQty = carData.doorsQty;
    this.seatsQty = carData.seatsQty;
    this.status = carData.status || false;
    this.id = carData.id;
  }
}