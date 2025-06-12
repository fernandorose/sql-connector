import { DataSource } from 'typeorm'

import {
  SQLSERVER_DATABASE_NAME,
  SQLSERVER_PASSWORD,
  SQLSERVER_SERVER,
  SQLSERVER_USERNAME,
} from '@config/config.cfg'
import { EDesti } from '@modules/tic/module/destis/db'

export const SqlServerDataSource = new DataSource({
  type: 'mssql',
  host: SQLSERVER_SERVER,
  port: 1433,
  username: SQLSERVER_USERNAME,
  password: SQLSERVER_PASSWORD,
  database: SQLSERVER_DATABASE_NAME,

  entities: [EDesti],
  logging: true,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
})
