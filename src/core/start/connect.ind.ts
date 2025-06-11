import { DataSource } from 'typeorm'
import {
  SQLSERVER_DATABASE_NAME,
  SQLSERVER_PASSWORD,
  SQLSERVER_USERNAME,
} from '../../config/config.cfg'
import { EDesti } from '../../module/tic/module/destis/db/migrator.dtb'

export const SqlServerDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: SQLSERVER_USERNAME,
  password: SQLSERVER_PASSWORD,
  database: SQLSERVER_DATABASE_NAME,

  entities: [EDesti],

  synchronize: false,
  dropSchema: false,

  logging: true,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
})
