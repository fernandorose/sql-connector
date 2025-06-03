import { DataSource } from 'typeorm'
import {
  POSTGRES_DATABASE_NAME,
  POSTGRES_PASSWORD,
  POSTGRES_USERNAME,
  SQLSERVER_NAME,
  SQLSERVER_PASSWORD,
  SQLSERVER_USERNAME,
} from '../../config/config'
import { Desti } from '../../model/destis.mod'

export const SqlServerDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 5432,
  username: SQLSERVER_USERNAME,
  password: SQLSERVER_PASSWORD,
  database: SQLSERVER_NAME,

  entities: [Desti],

  synchronize: true,
  logging: true,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
})
