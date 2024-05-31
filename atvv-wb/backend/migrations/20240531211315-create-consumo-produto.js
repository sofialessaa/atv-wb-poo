'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consumoProduto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      produto: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('consumoProduto');
  }
};