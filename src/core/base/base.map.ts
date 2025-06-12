import { BaseRsv } from '@core/base'
import { ObjectLiteral } from 'typeorm'

export abstract class BaseMap<T extends ObjectLiteral> {
  public rsv!: BaseRsv<T>
  public constructor(rsv: BaseRsv<T>) {
    this.rsv = rsv
  }
}
