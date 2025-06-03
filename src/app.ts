import express, { Application } from 'express'
import { AppDataSource } from './core/start/connection.ind'
import desti from './routes/destis.routes'

export class App {
  private static _instance: App
  public app: Application

  private constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    this.conn()
  }

  public static get instance(): App {
    return this._instance instanceof App
      ? this._instance
      : (this._instance = new this())
  }

  private middlewares() {
    this.app.use(express.json())
  }

  private routes() {
    this.app.use('/api', desti)
  }

  private conn() {
    AppDataSource.initialize()
      .then(() => {
        console.log('Data Source has been initialized!')
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err)
      })
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App running on port ${port}`)
    })
  }
}
