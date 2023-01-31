require('dotenv').config()

module.exports = {

  //Database config
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB || 'database_development',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'postgres',
  
  //Seeds config
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',

  // Migrate config
  migrateStorage: 'sequelize',
  migrateStorageTableName: 'migrations'

}



//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }


