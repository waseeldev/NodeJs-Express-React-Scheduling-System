'use strict';
const {
  Model
} = require('sequelize');
const Schedule = require('./Schedule');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Schedule.belongsTo(models.Employee, { foreignKey: 'employeeId' })
      Employee.hasMany(models.Schedule,{ foreignKey: 'employeeId' })
    }
  }
  Employee.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees', // Database table name
    // underscored: true, // Use underscored naming convention for columns
    timestamps: true, // Automatically manage createdAt and updatedAt columns
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  });
  return Employee;
};