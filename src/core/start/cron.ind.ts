import SqlJob from '../../modules/tic/modules/destis/job'

export abstract class CronJob {
  public static init(): void {
    SqlJob.schedules()
  }
}

export default CronJob
