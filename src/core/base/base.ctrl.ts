import { ObjectLiteral } from "typeorm";
import { BaseSrv } from "./base.srv";

export abstract class BaseCtrl<T extends ObjectLiteral>{
  public srv!: BaseSrv<T>

  public constructor(srv: BaseSrv<T>){
    this.srv = srv
  }
}