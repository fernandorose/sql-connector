import { Request, Response, Router } from 'express'
import { AppDataSource } from '../core/start/connection.ind'
import { Desti } from '../model/destis.mod'

const router = Router()

router.get('/destis', async (req: Request, res: Response) => {
  try {
    const response = await fetch(
      'http://localhost:3800/v2/api/tic/sql/transfer-destis',
    )
    const destis = await response.json()

    await AppDataSource.getRepository(Desti).clear()

    // await AppDataSource.query(`ALTER SEQUENCE CN_Numero RESTART WITH 1`)

    const nuevosDestis = destis.map((desti: any) =>
      AppDataSource.manager.create(Desti, {
        DX_Folio: desti.key,
        DX_Tipo: desti.state_data.type_details[0].title,
        DX_Estado: desti.state_data.status_details[0].title,
        DX_Etapa: desti.state_data.flow_details[0].title,
        DX_Titulo: desti.detail_data.title,
        DX_Descripcion: desti.detail_data.description,
        DX_Ahorros: desti.detail_data.saving,
        DX_Ahorro_Dolares: desti.detail_data.money,
        DX_Ahorros_Horas: desti.detail_data.hours,
        DX_Area: desti.corporate_data.area_details[0].title,
        DX_Autor: desti.user_data.author_details[0].account_data.email,
        DX_Responsable:
          desti.user_data.responsible_details[0].account_data.email,
        DX_Fecha_Creacion: new Date(desti.created),
        DX_Fecha_Act: new Date(desti.updated),
        DX_Calificacion: 0,
        DX_Comentario_Canc: desti.review.reason,
        DX_Comentario_Rev: desti.review.motive,
        DX_Fecha_Fin_Revision: new Date(desti.review.dtend ?? '1900-01-01'),
        DX_Fecha_Estimada: new Date(
          desti.analysis?.date_estimated ?? '1900-01-01',
        ),
        DX_Hora_Estimada: desti.analysis.hour_estimated,
        DX_Comentario_Analisis: desti.analysis.motive,
        DX_Fecha_Fin_Analisis: new Date(desti.analysis?.dtend ?? '1900-01-01'),
        DX_Hora_Desarrollo: desti.development.hour_development,
        DX_Comentario_Des: desti.development.motive,
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

    await AppDataSource.manager.save(nuevosDestis)

    res.json(nuevosDestis)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al cargar los destis' })
  }
})

export default router
