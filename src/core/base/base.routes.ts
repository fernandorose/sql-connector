import { BaseCtrl } from '@core/base'
import { Router } from 'express'
import { ObjectLiteral } from 'typeorm'

export abstract class BaseRouter<T extends ObjectLiteral> {
  public routes: Router
  public ctrl: BaseCtrl<T>

  public constructor(ctrl: BaseCtrl<T>) {
    this.routes = Router()
    this.ctrl = ctrl
  }

  public setRouter(): Router {
    return this.routes
  }
}
