'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'webtoons',
      [
        {
          title: 'Dr.Beauty',
          genre: 'Drama',
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/jS.hlPkjWhB.jpg?resize=125,176&quality=80',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 2,
        },
        {
          title: 'Apocalyptic World',
          genre: 'Action',
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/I-Have-a-Mansion-In-The-Post-Apocalyptic-World.jpg?resize=95,150&quality=80',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 2,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  },
};
