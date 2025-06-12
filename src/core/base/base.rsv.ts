import { BaseMod } from '@core/base'
import { ObjectLiteral } from 'typeorm'

export abstract class BaseRsv<T extends ObjectLiteral> {
  public model!: BaseMod<T>
  public constructor(model: BaseMod<T>) {
    this.model = model
  }
}
