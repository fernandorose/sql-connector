import { ObjectLiteral } from "typeorm";
import { BaseRsv } from "./base.rsv";

export abstract class BaseMap<T extends ObjectLiteral>{
  public rsv!: BaseRsv<T>
  public constructor(rsv: BaseRsv<T>){
    this.rsv = rsv
  }
}