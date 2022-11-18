import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('testa a camada service para cars', function () {
  const motorcycleInput = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street' as 'Street' | 'Custom' | 'Trail',
    engineCapacity: 600,
  };
  it('testa a criação de um novo mo', async function () {
    const motorcycleOutput = new Motorcycle({ ...motorcycleInput, id: '6377d736593812762a2efb42' });

    Sinon.stub(Model, 'create').resolves(motorcycleOutput);
    const service = new MotorcycleService();
    const result = await service.newMotorcycle(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  it('testa a se é possivel encontrar uma moto pelo id', async function () {
    // const motorcycleInput = {
    //   model: 'Honda Cb 600f Hornet',
    //   year: 2005,
    //   color: 'Yellow',
    //   status: true,
    //   buyValue: 30.000,
    //   category: 'Street' as 'Street' | 'Custom' | 'Trail',
    //   engineCapacity: 600,
    // };
    const motorcycleOutput = new Motorcycle({ ...motorcycleInput, id: '6377d736593812762a2efb42' });

    Sinon.stub(Model, 'findById').resolves(motorcycleOutput);
    const service = new MotorcycleService();
    const result = await service.findById('6377d736593812762a2efb42');

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  it('testa a se é possivel encontrar todos as motos', async function () {
    // const motorcycleInput = {
    //   model: 'Honda Cb 600f Hornet',
    //   year: 2005,
    //   color: 'Yellow',
    //   status: true,
    //   buyValue: 30.000,
    //   category: 'Street' as 'Street' | 'Custom' | 'Trail',
    //   engineCapacity: 600,
    // };
    const motorcycleOutput = new Motorcycle({ ...motorcycleInput, id: '6377d736593812762a2efb42' });

    Sinon.stub(Model, 'find').resolves([motorcycleOutput]);
    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal([motorcycleOutput]);
  });
});
afterEach(function () {
  Sinon.restore();
}); 