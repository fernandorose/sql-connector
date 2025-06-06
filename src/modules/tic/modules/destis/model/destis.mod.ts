import { BaseMod } from '@core/base/base.mod'
import PostgresDataSource from '@core/start/postgresConnection'
import { EDesti, IDesti } from '@modDestis/db/desti.dtb'
import { SqlServerDataSource } from '@core/start/sqlServerConnection'

export class DestiMod extends BaseMod<IDesti> {
  private static _instance: DestiMod

  public constructor() {
    super(EDesti, SqlServerDataSource)
  }

  public static get instance(): DestiMod {
    return this._instance instanceof DestiMod
      ? this._instance
      : (this._instance = new this())
  }
}
