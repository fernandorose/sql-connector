import { BaseRouter } from '@core/base'
import { MigratorCtrl } from '@modDestis/controller'
import { IDesti } from '@modDestis/db'
import { Request, Response, Router } from 'express'

export class MigratorRouter extends BaseRouter<IDesti> {
  private static _instance: MigratorRouter

  public constructor() {
    super(MigratorCtrl.instance)
  }

  public static get instance(): MigratorRouter {
    return this._instance instanceof MigratorRouter
      ? this._instance
      : (this._instance = new this())
  }

  public override setRouter(): Router {
    super.setRouter()
    this.routes.get(
      `/transfer`,
      [],
      (req: Request, res: Response) =>
        void (this.ctrl as MigratorCtrl).migrate(req, res),
    )
    return this.routes
  }
}

export default MigratorRouter
