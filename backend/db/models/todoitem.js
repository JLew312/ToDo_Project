'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToDoItem.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    where: {
      type: DataTypes.STRING,
    },
    repeat: {
      type: DataTypes.INTEGER,
    },
    reminder: {
      type: DataTypes.INTEGER,
    },
    notes: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'ToDoItem',
  });
  return ToDoItem;
};
