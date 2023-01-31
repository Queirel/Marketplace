const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
// const { sequelize } = require("./models/index")

const Products = require("./products.models");
const Transactions = require("./transactions.models");

const Users = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            len:{
                args:[2,255],
                msg: "User name lenght must be between 2 and 255 characters"
            }
        }
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        len:{
            args:[2,255],
            msg: "Password must be between 2 and 255 characters"
        }
    },
    user_role: {
        type: DataTypes.ENUM,
        values:["superadmin","admin","user","guest"],
        allowNull: false,
    }
}, { timestamps: true },{tableName:'users'})

// Users.hasMany(Products, {
//     foreignKey: 'prod_user_id',
//     sourceKey: 'user_id'
// })

// Products.belongsTo(Users, {
//     foreignKey: 'prod_user_id',
//     targetId: 'user_id'
// })

// Users.hasMany(Transactions, {
//     foreignKey: 'trans_buy_user_id',
//     sourceKey: 'user_id'
// })

// Transactions.belongsTo(Users, {
//     foreignKey: 'trans_buy_user_id',
//     targetId: 'user_id'
// })

module.exports = Users