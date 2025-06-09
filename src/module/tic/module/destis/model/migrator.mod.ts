import { BaseMod } from "../../../../../core/base/base.mod"
import PostgresDataSource from "../../../../../core/start/postgresConnection"
import { EDesti, IDesti } from "../db/migrator.dtb"


export class MigratorMod extends BaseMod<IDesti> {
  private static _instance: MigratorMod

  public constructor() {
    super(EDesti, PostgresDataSource)
  }

  public static get instance(): MigratorMod {
    return this._instance instanceof MigratorMod
      ? this._instance
      : (this._instance = new this())
  }
}
