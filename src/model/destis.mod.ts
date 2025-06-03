import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'F_DESTIs' })
export class Desti {
  @PrimaryGeneratedColumn()
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

  @Column({ type: 'text', nullable: true })
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

  @Column({ length: 50, nullable: true })
  DX_Fecha_Creacion: string

  @Column({ length: 50, nullable: true })
  DX_Fecha_Act: string

  @Column({ length: 10, nullable: true })
  DX_Calificacion: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Canc: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Rev: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Revision: string

  @Column({ nullable: true })
  DX_Fecha_Estimada: string

  @Column({ length: 50, nullable: true })
  DX_Hora_Estimada: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Analisis: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Analisis: string

  @Column({ length: 50, nullable: true })
  DX_Hora_Desarrollo: string

  @Column({ type: 'text', nullable: true })
  DX_Comentario_Des: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Desarrollo: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Aprobacion: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Produccion: string

  @Column({ nullable: true })
  DX_Fecha_Fin_Evaluacion: string
}
