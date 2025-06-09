import { DataSource } from 'typeorm'
import { POSTGRES_DATABASE_NAME, POSTGRES_PASSWORD, POSTGRES_USERNAME } from '../../config/config'
import { EDesti } from '../../module/tic/module/destis/db/migrator.dtb'


export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE_NAME,

  entities: [EDesti],

  synchronize: true,
  dropSchema: true,
  logging: true,
})

export default PostgresDataSource
