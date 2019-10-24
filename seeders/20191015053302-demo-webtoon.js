'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'webtoons',
      [
        {
          title: 'Apocalyptic World',
          genre: 'Adventure',
          image:
            'https://wallpaperaccess.com/full/31260.png',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 1,
        },
        {
          title: 'Tokyo World',
          genre: 'Action',
          image:
            'https://3.bp.blogspot.com/-cQ8DKAnAZeQ/W-nqOhgV35I/AAAAAAAAAhA/poyNCjFzocELDumlXlyAbG9mvjbH3nwGACHMYCw/s1600/tokyo-ghoul-kirishima-touka-anime-girls-wallpapers-hd-desktop.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 1,
        },
        {
          title: 'World Of War',
          genre: 'Action',
          image:
            'https://newwallpaperdownload.com/wallpapers/Anime-Wallpaper-On-Wallpaper-Hd-30.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 1,
        },
        {
          title: 'Dr.Bone',
          genre: 'Horror',
          image:
            'https://i.pinimg.com/originals/09/6d/f0/096df0eb195b8f0d9475924f9a1e9425.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 2,
        },
        {
          title: 'Love School',
          genre: 'Drama',
          image:
            'https://wallup.net/wp-content/uploads/2015/12/15497-anime-school_uniform-Kagerou_Project-Enomoto_Takane-Kisaragi_Shintaro-Tateyama_Ayano-748x440.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 2,
        },
        {
          title: 'Dr.Bone',
          genre: 'Adventure',
          image:
            'https://i.pinimg.com/originals/ac/23/42/ac234251be490f78d07577e85b974cd4.jpg',
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
