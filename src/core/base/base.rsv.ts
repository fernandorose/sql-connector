import { ObjectLiteral } from "typeorm";
import { BaseMod } from "./base.mod";

export abstract class BaseRsv<T extends ObjectLiteral>{
  public model!: BaseMod<T>
  public constructor(model: BaseMod<T>){
    this.model = model
  }
}