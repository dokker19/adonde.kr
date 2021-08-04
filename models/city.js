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
      this.hasMany(models.Express, { foreignKey : 'sido_sgg' })
      this.hasMany(models.Suburbs, { foreignKey : 'sido_sgg' })
      this.hasMany(models.Train, { foreignKey : 'sido_sgg' })
      this.hasMany(models.specialsuburbs, { foreignKey : 'sido_sgg' })
      this.hasMany(models.specialexpress, { foreignKey : 'sido_sgg' })
    }
  };
  City.init({
    sido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sgg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: DataTypes.STRING,
    sido_sgg: {
      // foreign key in express, suburbs, and train table
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    sido_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sgg_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image_src: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName : 'cities',
    modelName: 'City',
  });
  return City;
};