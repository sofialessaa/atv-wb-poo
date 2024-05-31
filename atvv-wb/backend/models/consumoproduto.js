'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consumoProduto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  consumoProduto.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    produto: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'consumoProduto',
    tableName: 'consumoProduto',
  });
  return consumoProduto;
};