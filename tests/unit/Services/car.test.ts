import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('testa a camada service para cars', function () {
  it('testa a criação de um novo carro', async function () {
    const carInput = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput = new Car({ ...carInput, id: '6377d736593812762a2efb42' });

    Sinon.stub(Model, 'create').resolves(carOutput);
    const service = new CarService();
    const result = await service.newCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
  it('testa a se é possivel encontrar um carro pelo id', async function () {
    const carInput = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput = new Car({ ...carInput, id: '6377d736593812762a2efb42' });

    Sinon.stub(Model, 'findById').resolves(carOutput);
    const service = new CarService();
    const result = await service.findById('6377d736593812762a2efb42');

    expect(result).to.be.deep.equal(carOutput);
  });
  it('testa a se é possivel encontrar todos os carros', async function () {
    const carInput = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput = new Car({ ...carInput, id: '6377d736593812762a2efb42' });

    Sinon.stub(Model, 'find').resolves([carOutput]);
    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal([carOutput]);
  });
});
afterEach(function () {
  Sinon.restore();
}); 