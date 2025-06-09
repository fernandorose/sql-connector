process.loadEnvFile()

/** Create .env file with next variables */

export const PORT = 3000

export const DB_SOURCE = process.env.DB_SOURCE

export const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
export const POSTGRES_DATABASE_NAME = process.env.POSTGRES_DATABASE_NAME

export const MYSQL_USERNAME = process.env.MYSQL_USERNAME
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
export const MYSQL_DATABASE_NAME = process.env.MYSQL_DATABASE_NAME

export const SQLSERVER_USERNAME = process.env.SQLSERVER_USERNAME
export const SQLSERVER_PASSWORD = process.env.SQLSERVER_PASSWORD
export const SQLSERVER_SERVER = process.env.SQLSERVER_SERVER
export const SQLSERVER_DATABASE_NAME = process.env.SQLSERVER_DATABASE_NAME

export const DESTIS_API_URL = process.env.DESTIS_API_URL
