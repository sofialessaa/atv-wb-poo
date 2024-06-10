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
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dataEmissaoCpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    uf_rg: DataTypes.STRING,
    dataEmissaoRG: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    cep: DataTypes.STRING,
    informacoes_adicionais: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'cliente',
    tableName: 'cliente',
  });
  return cliente;
};