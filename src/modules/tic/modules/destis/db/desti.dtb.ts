import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm'

export interface IDesti extends Document {
  CN_Numero?: number | string
  DX_Folio: string
  DX_Tipo?: string
  DX_Estado?: string
  DX_Etapa?: string
  DX_Titulo?: string
  DX_Descripcion?: string
  DX_Ahorros?: string
  DX_Ahorro_Dolares?: string
  DX_Ahorros_Horas?: string
  DX_Area?: string
  DX_Autor?: string
  DX_Responsable?: string
  DX_Fecha_Creacion?: Date
  DX_Fecha_Act?: Date
  DX_Calificacion?: string
  DX_Comentario_Canc?: string
  DX_Comentario_Rev?: string
  DX_Fecha_Fin_Revision?: Date
  DX_Fecha_Estimada?: Date
  DX_Hora_Estimada?: string
  DX_Comentario_Analisis?: string
  DX_Fecha_Fin_Analisis?: Date
  DX_Hora_Desarrollo?: string
  DX_Comentario_Des?: string
  DX_Fecha_Fin_Desarrollo?: Date
  DX_Fecha_Fin_Aprobacion?: Date
  DX_Fecha_Fin_Produccion?: Date
  DX_Fecha_Fin_Evaluacion?: Date
}

@Entity({ name: 'F_DESTIs' })
export class EDesti {
  @PrimaryGeneratedColumn('identity')
  CN_Numero: number

  @Column({})
  DX_Folio: string

  @Column({ nullable: true })
  DX_Tipo: string

  @Column({ nullable: true })
  DX_Estado: string

  @Column({ nullable: true })
  DX_Etapa: string

  @Column({ nullable: true })
  DX_Titulo: string

  @Column({ type: 'text', nullable: true })
  DX_Descripcion: string

  @Column({ nullable: true })
  DX_Ahorros: string

  @Column({ nullable: true })
  DX_Ahorro_Dolares: string

  @Column({ nullable: true })
  DX_Ahorros_Horas: string

  @Column({ nullable: true })
  DX_Area: string

  @Column({ nullable: true })
  DX_Autor: string

  @Column({ nullable: true })
  DX_Responsable: string

  @Column({ nullable: true })
  DX_Fecha_Creacion: Date

  @Column({ nullable: true })
  DX_Fecha_Act: Date

  @Column({ nullable: true })
  DX_Calificacion: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Canc: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Rev: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Revision: Date

  @Column({ nullable: true })
  DX_Fecha_Estimada: Date

  @Column({ nullable: true })
  DX_Hora_Estimada: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Analisis: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Analisis: Date

  @Column({ nullable: true })
  DX_Hora_Desarrollo: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Des: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Desarrollo: Date

  @Column({ nullable: true })
  DX_Fecha_Fin_Aprobacion: Date

  @Column({ nullable: true })
  DX_Fecha_Fin_Produccion: Date

  @Column({ nullable: true })
  DX_Fecha_Fin_Evaluacion: Date
}
