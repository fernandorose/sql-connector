import { DataSource } from 'typeorm'
import {
  POSTGRES_DATABASE_NAME,
  POSTGRES_PASSWORD,
  POSTGRES_USERNAME,
} from '../../config/config'
import { Desti } from '../../model/destis.mod'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE_NAME,

  entities: [Desti],
  synchronize: true,
  dropSchema: true,
  logging: true,
})
