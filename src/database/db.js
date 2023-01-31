const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB || 'database_development',
    process.env.DB_USER  || 'postgres',
    process.env.DB_PASSWORD || 'password',
    {
        host: 'localhost',
        dialect: 'postgres'
    })

module.exports = sequelize