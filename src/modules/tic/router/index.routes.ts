import { Router } from 'express'
import { AppRouter as DestisRouter } from '../modules/destis/router/destis.routes'

export abstract class AppRouter {
  private static _routes: Router

  private _allowStatic(): string {
    return ``
  }

  public static config(): Router {
    this._routes = Router()
    this._routes.use(`/destis`, [], DestisRouter.config())
    return this._routes
  }
}

export default AppRouter
