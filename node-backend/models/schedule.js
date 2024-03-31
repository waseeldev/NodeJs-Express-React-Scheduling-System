'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Schedule.belongsTo(models.Employee, { foreignKey: 'employeeId' })
    }
  }
  Schedule.init({
    date : DataTypes.DATE,
    time : DataTypes.TIME,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName: 'schedules', // Database table name
    // underscored: true, // Use underscored naming convention for columns
    timestamps: true, // Automatically manage createdAt and updatedAt columns
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  });
  return Schedule;
};