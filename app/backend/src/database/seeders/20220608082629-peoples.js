'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Peoples',
    [
      {
        fullName: 'Alessandro Mendes',
        birthDate: '2008-7-04',
      },
      {
        fullName: 'Clarisse Santos',
        birthDate: '1998-12-09',
      },
      {
        fullName: 'Aurélio Ramos',
        birthDate: '1991-2-26',
      },
      {
        fullName: 'David Jacob Ferreira',
        birthDate: '2002-6-06',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Peoples', null, {}),
};