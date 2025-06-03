import { Request, Response, Router } from 'express'
import { PostgresDataSource } from '../core/start/postgresConnection'
import { Desti } from '../model/destis.mod'
import { DESTIS_API_URL } from '../config/config'

const router = Router()

router.get('/destis', async (req: Request, res: Response) => {
  try {
    const response = await fetch(DESTIS_API_URL!)
    const destis = await response.json()

    await PostgresDataSource.getRepository(Desti).clear()

    console.log(destis)

    await PostgresDataSource.query(`TRUNCATE TABLE "F_DESTIs" RESTART IDENTITY`)

    const nuevosDestis = destis.map((desti: any) =>
      PostgresDataSource.manager.create(Desti, {
        DX_Folio: desti.key || 'No asignado',
        DX_Tipo: desti.state_data?.type_details?.[0]?.title || 'No asignado',
        DX_Estado:
          desti.state_data?.status_details?.[0]?.title || 'No asignado',
        DX_Etapa: desti.state_data?.flow_details?.[0]?.title || 'No asignado',
        DX_Titulo: desti.detail_data?.title || 'No asignado',
        DX_Descripcion: desti.detail_data?.description || 'No asignado',
        DX_Ahorros: desti.detail_data?.saving || 'No asignado',
        DX_Ahorro_Dolares: desti.detail_data?.money || 'No asignado',
        DX_Ahorros_Horas: desti.detail_data?.hours || 'No asignado',
        DX_Area:
          desti.corporate_data?.area_details?.[0]?.title || 'No asignado',
        DX_Autor:
          desti.user_data?.author_details?.[0]?.account_data?.email ||
          'No asignado',
        DX_Responsable:
          desti.user_data?.responsible_details?.[0]?.account_data?.email ||
          'No asignado',
        DX_Fecha_Creacion: new Date(desti.created || '1900-01-01'),
        DX_Fecha_Act: new Date(desti.updated || '1900-01-01'),
        DX_Calificacion: desti.retro_details?.[0]?.star || 'No asignado',
        DX_Comentario_Canc: desti.review?.reason || 'No asignado',
        DX_Comentario_Rev: desti.review?.motive || 'No asignado',
        DX_Fecha_Fin_Revision: new Date(desti.review?.dtend || '1900-01-01'),
        DX_Fecha_Estimada: new Date(
          desti.analysis?.date_estimated ?? '1900-01-01',
        ),
        DX_Hora_Estimada: desti.analysis?.hour_estimated || 'No asignado',
        DX_Comentario_Analisis: desti.analysis?.motive || 'No asignado',
        DX_Fecha_Fin_Analisis: new Date(desti.analysis?.dtend || '1900-01-01'),
        DX_Hora_Desarrollo:
          desti.development?.hour_development || 'No asignado',
        DX_Comentario_Des: desti.development?.motive || 'No asignado',
        DX_Fecha_Fin_Desarrollo: new Date(
          desti.development?.dtend ?? '1900-01-01',
        ),
        DX_Fecha_Fin_Aprobacion: new Date(
          desti.approvation?.dtend ?? '1900-01-01',
        ),
        DX_Fecha_Fin_Produccion: new Date(
          desti.production?.dtend ?? '1900-01-01',
        ),
        DX_Fecha_Fin_Evaluacion: new Date(
          desti.evaluation?.dtend ?? '1900-01-01',
        ),
      }),
    )

    await PostgresDataSource.manager.save(nuevosDestis)

    res.json(nuevosDestis)
  } catch (err) {
    console.error(err)
    res.status(500).json({ err })
  }
})

export default router
