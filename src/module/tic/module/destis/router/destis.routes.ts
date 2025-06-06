import { Request, Response, Router } from 'express'
import { MigratorSrv } from '@modDestis/service/migrator.srv'

export abstract class AppRouter {
  private static _routes: Router

  private _allowStatic(): string {
    return ``
  }

  public static config(): Router {
    this._routes = Router()
    this._routes.get(
      `/transfer`,
      [],
      (req: Request, res: Response) =>
        void MigratorSrv.instance.transferRequest(req, res),
    )
    return this._routes
  }
}

export default AppRouter
