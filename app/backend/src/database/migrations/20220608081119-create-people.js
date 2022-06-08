'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peoples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birthDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Peoples');
  }
};