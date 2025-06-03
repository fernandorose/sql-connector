import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'F_DESTIs' })
export class Desti {
  @PrimaryGeneratedColumn('identity')
  CN_Numero: number

  @Column({ length: 50 })
  DX_Folio: string

  @Column({ length: 50, nullable: true })
  DX_Tipo: string

  @Column({ length: 50, nullable: true })
  DX_Estado: string

  @Column({ length: 50, nullable: true })
  DX_Etapa: string

  @Column({ length: 255, nullable: true })
  DX_Titulo: string

  @Column({ type: 'text', nullable: true })
  DX_Descripcion: string

  @Column({ nullable: true })
  DX_Ahorros: string

  @Column({ length: 50, nullable: true })
  DX_Ahorro_Dolares: string

  @Column({ length: 255, nullable: true })
  DX_Ahorros_Horas: string

  @Column({ length: 100, nullable: true })
  DX_Area: string

  @Column({ length: 100, nullable: true })
  DX_Autor: string

  @Column({ length: 100, nullable: true })
  DX_Responsable: string

  @Column({ nullable: true })
  DX_Fecha_Creacion: Date

  @Column({ nullable: true })
  DX_Fecha_Act: Date

  @Column({ length: 50, nullable: true })
  DX_Calificacion: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Canc: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Rev: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Revision: Date

  @Column({ nullable: true })
  DX_Fecha_Estimada: Date

  @Column({ length: 50, nullable: true })
  DX_Hora_Estimada: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Analisis: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Analisis: Date

  @Column({ length: 50, nullable: true })
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
