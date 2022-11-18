import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM <IMotorcycle> {
  constructor() {
    super('Motorcycle', {
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
  }
}