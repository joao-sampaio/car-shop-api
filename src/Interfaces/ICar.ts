export default interface ICar {
  id?: string,
  model:	string,
  year:	number,
  color:	string,
  status?:	boolean,
  buyValue:	number,
  readonly doorsQty:	number,
  readonly seatsQty: number
}