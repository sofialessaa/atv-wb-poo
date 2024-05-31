'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consumoServico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  consumoServico.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    servico: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'consumoServico',
    tableName: 'consumoServico',
  });
  return consumoServico;
};