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
          episodeId: 3,
          webtoonId: 4,
          createdBy: 2,
        },
        {
          page: 2,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Komiku-003-1567623468-185748.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 3,
          webtoonId: 4,
          createdBy: 2,
        },
        {
          page: 3,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Komiku-004-1567623469-185749.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 3,
          webtoonId: 4,
          createdBy: 2,
        },
        {
          page: 1,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7178.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 4,
          webtoonId: 5,
          createdBy: 2,
        },
        {
          page: 2,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7180.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 4,
          webtoonId: 5,
          createdBy: 2,
        },
        {
          page: 3,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7181.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 4,
          webtoonId: 5,
          createdBy: 2,
        },
        {
          page: 4,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7182.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 4,
          webtoonId: 5,
          createdBy: 2,
        },
        {
          page: 1,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7185.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 6,
          webtoonId: 2,
          createdBy: 1,
        },
        {
          page: 2,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Komiku-002-1567623467-185747.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 6,
          webtoonId: 2,
          createdBy: 1,
        },
        {
          page: 3,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7183.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 6,
          webtoonId: 2,
          createdBy: 1,
        },
        {
          page: 1,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7180.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 5,
          webtoonId: 2,
          createdBy: 1,
        },
        {
          page: 2,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Komiku-003-1567623468-185748.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 5,
          webtoonId: 2,
          createdBy: 1,
        },
        {
          page: 3,
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/20190413-komiku-7183.jpg?quality=65',
          createdAt: new Date(),
          updatedAt: new Date(),
          episodeId: 5,
          webtoonId: 2,
          createdBy: 1,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episode_images', null, {});
  },
};
