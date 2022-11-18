import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(carData: ICar | null): Car | null {
    if (carData) {
      return new Car(carData);
    }
    return null;
  }
  public async findAll() {
    const carODM = new CarODM();
    const query = await carODM.findAll();
    if (query) {
      const cars = query.map((car) => this.createCarDomain(car));
      return cars;
    }
    return [];
  }
  public async findById(id: string) {
    const carODM = new CarODM();
    const query = await carODM.findById(id);
    return this.createCarDomain(query);
  }
  public async newCar(carData: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(carData);
    return this.createCarDomain(newCar);
  }
}