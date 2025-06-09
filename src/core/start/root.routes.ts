import { AppRouter as SqlRouter } from '../../module/tic/router'
import { Router } from 'express'

export abstract class AppRouter {
  private static _routes: Router

  private _allowStatic(): string {
    return ``
  }

  public static config(): Router {
    this._routes = Router()
    this._routes.use(`/tic`, [], SqlRouter.config())
    return this._routes
  }
}

export default AppRouter
