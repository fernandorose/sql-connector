import { BaseMod } from '../../../../../core/base/base.mod'
import PostgresDataSource from '../../../../../core/start/postgresConnection'
import { EDesti, IDesti } from '../db/desti.dtb'

export class DestiMod extends BaseMod<IDesti> {
  private static _instance: DestiMod

  public constructor() {
    super(EDesti, PostgresDataSource)
  }

  public static get instance(): DestiMod {
    return this._instance instanceof DestiMod
      ? this._instance
      : (this._instance = new this())
  }
}
