import { model, Model, models, Schema } from "mongoose";
import ICar from "../Interfaces/ICar";

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor(){
    this.schema = new Schema<ICar>({
      model:	{ type: String, required: true },
      year:	{ type: Number, required: true },
      color:	{ type: String, required: true },
      status:	{ type: Boolean, required: false },
      buyValue:	{ type: Number, required: true },
      doorsQty:	{ type: Number, required: true },
      seatsQty: { type: Number, required: true },
    })
    this.model = models.Car || model('Car', this.schema)
  }
  public async create(carData: ICar): Promise<ICar> {
    console.log('this.model.create: ', this.model.create)
    const temp = this.model.create(carData)
    return temp
  }
}