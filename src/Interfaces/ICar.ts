import IVehicle from './IVehicle';

export default interface ICar extends IVehicle {
  readonly doorsQty: number,
  readonly seatsQty: number
}