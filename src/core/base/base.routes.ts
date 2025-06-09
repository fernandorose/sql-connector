import { ObjectLiteral } from 'typeorm'
import { BaseCtrl } from './base.ctrl'
import { Router } from 'express'

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
