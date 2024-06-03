'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cliente.init({
    nome: DataTypes.STRING,
    nomeSocial: DataTypes.STRING,
    genero: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dataEmissaoCpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    UF_RG: DataTypes.STRING,
    dataEmissaoRG: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
    tableName: 'cliente',
  });
  return cliente;
};