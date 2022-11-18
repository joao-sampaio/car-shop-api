// import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM <ICar> {
  constructor() {
    super('Car', {
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
  }
}