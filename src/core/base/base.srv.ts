import { ObjectLiteral } from "typeorm";
import { BaseMap } from "./base.map";
import { BaseRsv } from "./base.rsv";

export abstract class BaseSrv<T extends ObjectLiteral> extends BaseMap<T>{
  public constructor(rsv: BaseRsv<T>) {
    super(rsv)
  }
}