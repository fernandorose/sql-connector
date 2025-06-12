import { BaseSrv } from '@core/base'
import { ObjectLiteral } from 'typeorm'

export abstract class BaseCtrl<T extends ObjectLiteral> {
  public srv!: BaseSrv<T>

  public constructor(srv: BaseSrv<T>) {
    this.srv = srv
  }
}
