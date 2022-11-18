import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }
  public async findAll(): Promise<ICar[] | null> {
    return this.model.find();
  }
  public async findById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }
  public async create(carData: ICar): Promise<ICar> {
    return this.model.create(carData);
  }
  public async update(id:string, carData: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(id, { ...carData }, { returnDocument: 'after' });
  }
}