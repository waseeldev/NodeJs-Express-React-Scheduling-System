'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      time: {
        allowNull: false,
        type: Sequelize.TIME
      },
      comment: {
        allowNull: true,
        type: Sequelize.STRING
      },
      employeeId: { // Define the foreign key column
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees', // Name of the referenced table
          key: 'id' // Primary key of the referenced table
        },
        onUpdate: 'CASCADE', // Define the cascade behavior for updates
        onDelete: 'CASCADE' // Define the cascade behavior for deletes
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  }
};