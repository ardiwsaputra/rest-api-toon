'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'episode_images',
      [
        {
          page: 1,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Komiku-002-1567623467-185747.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 1,
          webtoonId: 3,
          createdBy: 2,
        },
        {
          page: 2,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Komiku-003-1567623468-185748.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 1,
          webtoonId: 3,
          createdBy: 2,
        },
        {
          page: 3,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Komiku-004-1567623469-185749.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 1,
          webtoonId: 3,
          createdBy: 2,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episode_images', null, {});
  },
};
