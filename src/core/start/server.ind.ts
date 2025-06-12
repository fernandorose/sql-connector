import express, { Application, Router } from 'express'
import http, { createServer, Server } from 'http'
import { PORT } from '../../config'
import { SqlServerDataSource } from './connect.ind'
import CronJob from './cron.ind'
import { AppRouter as RootRouter } from './root.routes'

export abstract class AppServer {
  private static _app: Application
  private static _httpSrv: http.Server
  private static _port: number = PORT
  private static _router: Router

  private _allowStatic(): string {
    return ``
  }

  public static async run(): Promise<void> {
    await this._init()
    this._middlewares()
    this._routing()
    this._conn()
    this._listen()
  }

  private static async _init(): Promise<void> {
    this._app = express()
    this._httpSrv = createServer(this._app as unknown as Server)
    this._router = Router()
    CronJob.init()
  }

  private static _middlewares() {
    this._app.use(express.json())
  }

  private static _routing() {
    this._router.use('/api', RootRouter.config())
    this._app.use(this._router)
  }

  private static async _conn() {
    try {
      await SqlServerDataSource.initialize()
      console.log('Postgres Data Source has been initialized!')
      // await SqlServerDataSource.query(`TRUNCATE TABLE F_DESTIs`)
      const tables = await SqlServerDataSource.query(`
        SELECT TABLE_SCHEMA, TABLE_NAME
        FROM INFORMATION_SCHEMA.TABLES
        WHERE TABLE_NAME = 'F_DESTIs'
      `)
      console.log(tables)
      const currentDB = await SqlServerDataSource.query(
        'SELECT DB_NAME() as db_name',
      )
      console.log('Base de datos conectada:', currentDB)
    } catch (err) {
      console.error('Error during Data Source initialization', err)
    }
  }

  public static _listen(): void {
    this._httpSrv.listen(this._port, (): void => {
      console.log(`Server running on port ${this._port}`)
    })
  }
}
