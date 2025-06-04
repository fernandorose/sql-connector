import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'F_DESTIs' })
export class Desti {
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
