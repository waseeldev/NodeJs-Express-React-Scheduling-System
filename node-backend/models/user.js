'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Database table name
    // underscored: true, // Use underscored naming convention for columns
    timestamps: true, // Automatically manage createdAt and updatedAt columns
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  });
  return User;
};