import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycleData: IMotorcycle | null): Motorcycle | null {
    if (motorcycleData) {
      return new Motorcycle(motorcycleData);
    }
    return null;
  }
  public async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const query = await motorcycleODM.findAll();
    if (query) {
      const motorcycles = query.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
      return motorcycles;
    }
    return [];
  }
  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const query = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(query);
  }
  public async newMotorcycle(MotorcycleData: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(MotorcycleData);
    return this.createMotorcycleDomain(newMotorcycle);
  }
  public async updateMotorcycle(id: string, MotorcycleData: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updateMotorcycle = await motorcycleODM.update(id, MotorcycleData);
    return this.createMotorcycleDomain(updateMotorcycle);
  }
}