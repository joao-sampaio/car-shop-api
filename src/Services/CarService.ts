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
  public async newCar(carData: ICar) {
    const carODM = new CarODM();
    console.log('substage 01');
    const newCar = await carODM.create(carData);
    console.log('substage 02', newCar);
    return this.createCarDomain(newCar);
  }
}