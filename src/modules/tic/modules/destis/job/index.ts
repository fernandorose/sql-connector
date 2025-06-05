import cron, { ScheduledTask, TaskOptions } from 'node-cron'
import { TransferDestis } from '../controller/transferDestis.ctrl'

export abstract class SqlJob {
  private static _transfer8am: ScheduledTask | undefined = undefined
  private static _transfer13pm: ScheduledTask | undefined = undefined

  private _allowStatic(): string {
    return ``
  }

  public static init(): void {
    this.schedules()
  }

  public static schedules(): void {
    // Ejecutar a las 8:00 am
    this._transfer8am = cron.schedule(
      '0 8 * * *', // minuto 0, hora 8, todos los días, todos los meses, cualquier día de la semana
      () => void this.transfer(),
      { timezone: `America/Mexico_City` },
    )

    // Ejecutar a las 13:00 pm
    this._transfer13pm = cron.schedule(
      '0 13 * * *', // minuto 0, hora 13, todos los días, todos los meses, cualquier día de la semana
      () => void this.transfer(),
      { timezone: `America/Mexico_City` },
    )
  }

  public static async transfer(): Promise<boolean> {
    try {
      await TransferDestis.instance.transfer()
      return true
    } catch (error: unknown) {
      return false
    }
  }
}

export default SqlJob
