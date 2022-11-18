import { model, Model, models, Schema, UpdateQuery } from 'mongoose';
// import IVehicle from '../Interfaces/IVehicle';

export default class AbstractODM <T> {
  private schema: Schema;
  protected model: Model<T>;

  constructor(name: string, expecs: object) {
    this.schema = new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      ...expecs,
    });
    this.model = models[name] || model(name, this.schema);
  }
  public async findAll(): Promise<T[] | null> {
    return this.model.find();
  }
  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }
  public async create(data: T): Promise<T> {
    return this.model.create(data);
  }
  public async update(id:string, data: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      id,
      { ...data } as UpdateQuery<T>,
      { returnDocument: 'after' },
    );
  }
}