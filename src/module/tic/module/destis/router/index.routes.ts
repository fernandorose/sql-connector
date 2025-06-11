import { Router } from 'express'
import { BaseRouter } from '../../../../../core/base/base.routes'
import { IDesti } from '../db/migrator.dtb'
import MigratorRouter from './migrator.routes'

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
