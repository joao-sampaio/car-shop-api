import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(
    VehicleData: IVehicle,
  ) {
    this.model = VehicleData.model;
    this.year = VehicleData.year;
    this.color = VehicleData.color;
    this.buyValue = VehicleData.buyValue;
    this.status = VehicleData.status || false;
    this.id = VehicleData.id;
  }
}