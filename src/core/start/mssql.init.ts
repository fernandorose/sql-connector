// import { ConnectionPool, config as SqlConfig } from 'mssql'
// import {
//   SQLSERVER_DATABASE_NAME,
//   SQLSERVER_PASSWORD,
//   SQLSERVER_USERNAME,
// } from '@config/config'

// export class MssqlInit {
//   private readonly dbName: string | undefined
//   private readonly config: SqlConfig
//   private static _instance: MssqlInit

//   public static get instance(): MssqlInit {
//     return this._instance instanceof MssqlInit
//       ? this._instance
//       : (this._instance = new this())
//   }

//   constructor() {
//     this.dbName = 'indelpro'
//     this.config = {
//       user: SQLSERVER_USERNAME,
//       password: SQLSERVER_PASSWORD,
//       server: 'localhost',
//       port: 1433,
//       database: 'master',
//       options: {
//         trustServerCertificate: true,
//       },
//     }
//   }

//   public async ensureDatabaseExists(): Promise<void> {
//     const pool = await new ConnectionPool(this.config).connect()

//     const query = `
//       IF DB_ID('${this.dbName}') IS NULL
//       BEGIN
//         CREATE DATABASE [${this.dbName}]
//       END
//     `

//     try {
//       await pool.request().query(query)
//       console.log(`✅ Base de datos "${this.dbName}" verificada o creada.`)
//     } catch (err) {
//       console.error('❌ Error al crear/verificar la base de datos:', err)
//     } finally {
//       await pool.close()
//     }
//   }
// }
