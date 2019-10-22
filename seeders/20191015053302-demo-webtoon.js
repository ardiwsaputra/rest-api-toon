'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'webtoons',
      [
        {
          title: 'True Beauty',
          genre: 'Drama',
          image:
            'https://static.zerochan.net/Kagura.%28Gin.Tama%29.full.477095.jpg',
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
          createdBy: 1,
        },
        {
          title: 'Ninja Kotori',
          genre: 'Action',
          image:
            'https://4.bp.blogspot.com/-aWQk0Y1Cymo/V7W4n7HCVwI/AAAAAAAAAHI/HarZCVTovxk5kMCruGKD4Akg-62gkbNuQCLcB/s1600/Image-Of-Ninja-Hattori.jpg',
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
          createdBy: 1,
        },
        {
          title: 'A Good Day',
          genre: 'Drama',
          image:
            'https://www.pixelstalk.net/wp-content/uploads/2016/05/Chidori-Sasuke-Wallpaper.jpg',
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
          createdBy: 1,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  },
};
