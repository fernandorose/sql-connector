import { BaseCtrl } from '@core/base'
import { IDesti } from '@modDestis/db'
import { MigratorSrv } from '@modDestis/service'
import { Request, Response } from 'express'

export class MigratorCtrl extends BaseCtrl<IDesti> {
  private static _instance: MigratorCtrl

  public constructor() {
    super(MigratorSrv.instance)
  }

  public static get instance(): MigratorCtrl {
    return this._instance instanceof MigratorCtrl
      ? this._instance
      : (this._instance = new this())
  }

  public async migrate(req: Request, res: Response): Promise<Response> {
    const data = await (this.srv as MigratorSrv).transfer()
    return res.json(data)
  }
}
