'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rgs.init({
    id_cliente: DataTypes.INTEGER,
    rg: DataTypes.STRING,
    uf_rg: DataTypes.STRING,
    dataEmissaoRG: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rgs',
    tableName: 'rgs',
  });
  return rgs;
};