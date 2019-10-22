'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourites = sequelize.define('favourites', {
    userId: DataTypes.INTEGER,
    webtoonId: DataTypes.INTEGER,
  }, {});
  favourites.associate = function(models) {
    favourites.belongsTo(models.webtoons, {
      as: 'WebtoonData',
      foreignKey: 'webtoonId'
    })
  };
  return favourites;
};