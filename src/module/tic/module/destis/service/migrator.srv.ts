import { Request, Response } from 'express'
import PostgresDataSource from '@core/start/postgresConnection'
import { SqlServerDataSource } from '@core/start/sqlServerConnection'
import { IDesti } from '@modules/tic/module/destis/db/migrator.dtb'
import { DESTIS_API_URL } from '@config/config'
import { MigratorMod } from '@modDestis/model/migrator.mod'

export class MigratorSrv {
  private static _instance: MigratorSrv

  public static get instance(): MigratorSrv {
    return this._instance instanceof MigratorSrv
      ? this._instance
      : (this._instance = new this())
  }

  public async transferRequest(_req: Request, res: Response): Promise<void> {
    const destis = await this.transfer()
    res.status(200).json(destis)
  }

  public async transfer() {
    try {
      const response = await fetch(DESTIS_API_URL!)
      const destis = await response.json()

      await MigratorMod.instance.clear()

      await PostgresDataSource.query(
        `TRUNCATE TABLE "F_DESTIs" RESTART IDENTITY`,
      )

      // await PostgresDataSource.query(`TRUNCATE TABLE F_DESTIs`)

      const NO_DATA_MESSAGE = 'No asignado'
      const NO_DATE = '1900-01-01 00:00:00'

      const newDestis: IDesti[] = []

      for (let desti of destis) {
        const create = await MigratorMod.instance.create({
          DX_Folio: desti.key || NO_DATA_MESSAGE,
          DX_Tipo:
            desti.state_data?.type_details?.[0]?.title || NO_DATA_MESSAGE,
          DX_Estado:
            desti.state_data?.status_details?.[0]?.title || NO_DATA_MESSAGE,
          DX_Etapa:
            desti.state_data?.flow_details?.[0]?.title || NO_DATA_MESSAGE,
          DX_Titulo: desti.detail_data?.title || NO_DATA_MESSAGE,
          DX_Descripcion: desti.detail_data?.description || NO_DATA_MESSAGE,
          DX_Ahorros: desti.detail_data?.saving || NO_DATA_MESSAGE,
          DX_Ahorro_Dolares: desti.detail_data?.money || NO_DATA_MESSAGE,
          DX_Ahorros_Horas: desti.detail_data?.hours || NO_DATA_MESSAGE,
          DX_Area:
            desti.corporate_data?.area_details?.[0]?.title || NO_DATA_MESSAGE,
          DX_Autor:
            desti.user_data?.author_details?.[0]?.account_data?.email ||
            NO_DATA_MESSAGE,
          DX_Responsable:
            desti.user_data?.responsible_details?.[0]?.account_data?.email ||
            NO_DATA_MESSAGE,
          DX_Fecha_Creacion: new Date(desti.created || NO_DATE),
          DX_Fecha_Act: new Date(desti.updated || NO_DATE),
          DX_Calificacion: desti.retro_details?.[0]?.star || NO_DATA_MESSAGE,
          DX_Comentario_Canc: desti.review?.reason || NO_DATA_MESSAGE,
          DX_Comentario_Rev: desti.review?.motive || NO_DATA_MESSAGE,
          DX_Fecha_Fin_Revision: new Date(desti.review?.dtend || NO_DATE),
          DX_Fecha_Estimada: new Date(
            desti.analysis?.date_estimated || NO_DATE,
          ),
          DX_Hora_Estimada: desti.analysis?.hour_estimated || NO_DATA_MESSAGE,
          DX_Comentario_Analisis: desti.analysis?.motive || NO_DATA_MESSAGE,
          DX_Fecha_Fin_Analisis: new Date(desti.analysis?.dtend || NO_DATE),
          DX_Hora_Desarrollo:
            desti.development?.hour_development || NO_DATA_MESSAGE,
          DX_Comentario_Des: desti.development?.motive || NO_DATA_MESSAGE,
          DX_Fecha_Fin_Desarrollo: new Date(
            desti.development?.dtend || NO_DATE,
          ),
          DX_Fecha_Fin_Aprobacion: new Date(
            desti.approvation?.dtend || NO_DATE,
          ),
          DX_Fecha_Fin_Produccion: new Date(desti.production?.dtend || NO_DATE),
          DX_Fecha_Fin_Evaluacion: new Date(desti.evaluation?.dtend || NO_DATE),
        })
        newDestis.push(create)
      }
      return newDestis
    } catch (err) {
      console.error(err)
    }
  }
}
