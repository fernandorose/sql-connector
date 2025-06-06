import SqlJob from '@modDestis/job'

export abstract class CronJob {
  public static init(): void {
    SqlJob.schedules()
  }
}

export default CronJob
