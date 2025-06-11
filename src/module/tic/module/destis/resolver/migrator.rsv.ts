import { BaseRsv } from '../../../../../core/base/base.rsv'
import { IDesti } from '../db/migrator.dtb'
import { MigratorMod } from '../model/migrator.mod'

export class MigratorRsv extends BaseRsv<IDesti> {
  private static _instance: MigratorRsv

  public constructor() {
    super(MigratorMod.instance)
  }

  public static get instance(): MigratorRsv {
    return this._instance instanceof MigratorRsv
      ? this._instance
      : (this._instance = new this())
  }
}
