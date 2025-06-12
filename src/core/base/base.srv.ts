import { BaseMap, BaseRsv } from '@core/base'
import { ObjectLiteral } from 'typeorm'

export abstract class BaseSrv<T extends ObjectLiteral> extends BaseMap<T> {
  public constructor(rsv: BaseRsv<T>) {
    super(rsv)
  }
}
