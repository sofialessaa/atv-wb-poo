'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cliente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      nomeSocial: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true
      },
      dataEmissaoCpf: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING,
        unique: true
      },
      UF_RG: {
        type: Sequelize.STRING
      },
      dataEmissaoRG: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cliente');
  }
};