'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  City.init({
    sido: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    sgg: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: DataTypes.STRING
  }, {
    sequelize,
    tableName : 'cities',
    modelName: 'City',
  });
  return City;
};