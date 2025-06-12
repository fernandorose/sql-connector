import { BaseMod } from '@core/base'
import { SqlServerDataSource } from '@core/start'
import { EDesti, IDesti } from '@modDestis/db'

export class MigratorMod extends BaseMod<IDesti> {
  private static _instance: MigratorMod

  public constructor() {
    super(EDesti, SqlServerDataSource)
  }

  public static get instance(): MigratorMod {
    return this._instance instanceof MigratorMod
      ? this._instance
      : (this._instance = new this())
  }
}
