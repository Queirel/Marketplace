'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // users.belongsToMany(models.transaction)
    }
  }
  users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'user',
  });
  return users;
};