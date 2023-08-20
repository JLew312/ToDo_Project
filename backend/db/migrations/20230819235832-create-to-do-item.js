'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'ToDoItems'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(options, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // startDate: {
      //   type: Sequelize.DATE,
      //   // allowNull: false
      // },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      // endDate: {
      //   type: Sequelize.DATE,
      //   // allowNull: false
      // },
      endTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      where: {
        type: Sequelize.STRING
      },
      repeat: {
        type: Sequelize.INTEGER
      },
      reminder: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ToDoItems');
  }
};
