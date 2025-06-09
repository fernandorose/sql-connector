
import { DataSource } from 'typeorm'
import { MYSQL_DATABASE_NAME, MYSQL_PASSWORD, MYSQL_USERNAME } from '../../config/config'
import { EDesti } from '../../module/tic/module/destis/db/migrator.dtb'

export const MySqlDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE_NAME,

  entities: [EDesti],

  synchronize: true,
  logging: true,
  dropSchema: true,
})
