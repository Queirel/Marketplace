
require('dotenv').config()

module.exports = {

  //Database config
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
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


