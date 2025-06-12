import { Column, Entity, PrimaryColumn } from 'typeorm'

export interface IDesti extends Document {
  DX_Folio: string
  DX_Tipo?: string
  DX_Estado?: string
  DX_Etapa?: string
  DX_Titulo?: string
  DX_Descripcion?: string
  DX_Ahorros?: string
  DX_Ahorro_Dolares?: string
  DX_Ahorros_Horas?: number
  DX_Area?: string
  DX_Autor?: string
  DX_Responsable?: string
  DX_Fecha_Creacion?: Date
  DX_Fecha_Act?: Date
  DX_Calificacion?: number
  DX_Comentario_Canc?: string
  DX_Comentario_Rev?: string
  DX_Fecha_Fin_Revision?: Date
  DX_Fecha_Estimada?: Date
  DX_Hora_Estimada?: number
  DX_Comentario_Analisis?: string
  DX_Fecha_Fin_Analisis?: Date
  DX_Hora_Desarrollo?: number
  DX_Comentario_Des?: string
  DX_Fecha_Fin_Desarrollo?: Date
  DX_Fecha_Fin_Aprobacion?: Date
  DX_Fecha_Fin_Produccion?: Date
  DX_Fecha_Fin_Evaluacion?: Date
}

@Entity({ name: 'F_DESTIs' })
export class EDesti {
  @PrimaryColumn()
  DX_Folio: string

  @Column()
  DX_Tipo: string

  @Column()
  DX_Estado: string

  @Column()
  DX_Etapa: string

  @Column()
  DX_Titulo: string

  @Column({ type: 'text' })
  DX_Descripcion: string

  @Column({ type: 'text' })
  DX_Ahorros: string

  @Column()
  DX_Ahorro_Dolares: string

  @Column()
  DX_Ahorros_Horas: number

  @Column()
  DX_Area: string

  @Column()
  DX_Autor: string

  @Column()
  DX_Responsable: string

  @Column()
  DX_Fecha_Creacion: Date

  @Column()
  DX_Fecha_Act: Date

  @Column()
  DX_Calificacion: number

  @Column({ type: 'text' })
  DX_Comentario_Canc: string

  @Column({ type: 'text' })
  DX_Comentario_Rev: string

  @Column()
  DX_Fecha_Fin_Revision: Date

  @Column()
  DX_Fecha_Estimada: Date

  @Column()
  DX_Hora_Estimada: number

  @Column({ type: 'text' })
  DX_Comentario_Analisis: string

  @Column()
  DX_Fecha_Fin_Analisis: Date

  @Column()
  DX_Hora_Desarrollo: number

  @Column({ type: 'text' })
  DX_Comentario_Des: string

  @Column()
  DX_Fecha_Fin_Desarrollo: Date

  @Column()
  DX_Fecha_Fin_Aprobacion: Date

  @Column()
  DX_Fecha_Fin_Produccion: Date

  @Column()
  DX_Fecha_Fin_Evaluacion: Date
}
