'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep.1 Perjuangan tanpa Batas',
          image:
            'https://i0.wp.com/lh3.googleusercontent.com/-uhAGBYL8Lgc/XICkzNTy6KI/AAAAAAAADEE/2VA_t1jcw-s7WGAXa2EHwWMCAcF3qTj0QCLcBGAs/s1600/40.9y9VoHk2.jpg?resize=170,130&quality=80',
          createdAt: new Date(),
          updatedAt: new Date(),
          webtoonId: 4,
          createdBy: 2,
        },
        {
          title: 'Ep.1 Karier dimulai',
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Forever-Mine-1.jpg?resize=95,150&quality=80',
          createdAt: new Date(),
          updatedAt: new Date(),
          webtoonId: 5,
          createdBy: 2,
        },
        {
          title: 'Ep.1 Badai Menerjang',
          image:
            'https://i0.wp.com/komiku.co/wp-content/uploads/Forever-Mine-1.jpg?resize=95,150&quality=80',
          createdAt: new Date(),
          updatedAt: new Date(),
          webtoonId: 2,
          createdBy: 1,
        },
        {
          title: 'Ep.2 Tanpa Batas',
          image:
            'https://i0.wp.com/lh3.googleusercontent.com/-uhAGBYL8Lgc/XICkzNTy6KI/AAAAAAAADEE/2VA_t1jcw-s7WGAXa2EHwWMCAcF3qTj0QCLcBGAs/s1600/40.9y9VoHk2.jpg?resize=170,130&quality=80',
          createdAt: new Date(),
          updatedAt: new Date(),
          webtoonId: 2,
          createdBy: 1,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  },
};
