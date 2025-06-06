import { DataSource } from 'typeorm'
import {
  SQLSERVER_NAME,
  SQLSERVER_PASSWORD,
  SQLSERVER_USERNAME,
} from '@config/config'
import { EDesti } from '@modules/tic/module/destis/db/migrator.dtb'

export const SqlServerDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: SQLSERVER_USERNAME,
  password: SQLSERVER_PASSWORD,
  database: SQLSERVER_NAME,

  entities: [EDesti],

  synchronize: true,
  logging: true,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
})
