'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'favourites',
      [
        {
          userId: 1,
          webtoonId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          webtoonId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          webtoonId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          webtoonId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favourites', null, {});    
  }
};
