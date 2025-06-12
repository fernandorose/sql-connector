import { BaseRouter } from '@core/base'
import { IDesti } from '@modDestis/db'
import { MigratorRouter } from '@modDestis/router'
import { Router } from 'express'

export abstract class AppRouter extends BaseRouter<IDesti> {
  private static _routes: Router

  private _allowStatic(): string {
    return ``
  }

  public static config(): Router {
    this._routes = Router()
    this._routes.use(`/migrator`, [], MigratorRouter.instance.setRouter())
    return this._routes
  }
}
