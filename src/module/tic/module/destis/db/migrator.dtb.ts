import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm'

export interface IDesti extends Document {
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
  @PrimaryColumn()
  DX_Folio: string

  @Column({ nullable: false })
  DX_Tipo: string

  @Column({ nullable: false })
  DX_Estado: string

  @Column({ nullable: false })
  DX_Etapa: string

  @Column({ nullable: false })
  DX_Titulo: string

  @Column({ type: 'text', nullable: false })
  DX_Descripcion: string

  @Column({ type: 'text', nullable: false })
  DX_Ahorros: string

  @Column({ nullable: false })
  DX_Ahorro_Dolares: string

  @Column({ nullable: false })
  DX_Ahorros_Horas: string

  @Column({ nullable: false })
  DX_Area: string

  @Column({ nullable: false })
  DX_Autor: string

  @Column({ nullable: false })
  DX_Responsable: string

  @Column({ nullable: false })
  DX_Fecha_Creacion: Date

  @Column({ nullable: false })
  DX_Fecha_Act: Date

  @Column({ nullable: false })
  DX_Calificacion: string

  @Column({ type: 'text', nullable: false })
  DX_Comentario_Canc: string

  @Column({ type: 'text', nullable: false })
  DX_Comentario_Rev: string

  @Column({ nullable: false })
  DX_Fecha_Fin_Revision: Date

  @Column({ nullable: false })
  DX_Fecha_Estimada: Date

  @Column({ nullable: false })
  DX_Hora_Estimada: string

  @Column({ type: 'text', nullable: false })
  DX_Comentario_Analisis: string

  @Column({ nullable: false })
  DX_Fecha_Fin_Analisis: Date

  @Column({ nullable: false })
  DX_Hora_Desarrollo: string

  @Column({ type: 'text', nullable: false })
  DX_Comentario_Des: string

  @Column({ nullable: false })
  DX_Fecha_Fin_Desarrollo: Date

  @Column({ nullable: false })
  DX_Fecha_Fin_Aprobacion: Date

  @Column({ nullable: false })
  DX_Fecha_Fin_Produccion: Date

  @Column({ nullable: false })
  DX_Fecha_Fin_Evaluacion: Date
}
