const models = require('../models');
const Favourite = models.favourites;
const Webtoon = models.webtoons;


exports.index = (req, res) =>
{
    let userId = req.params.id;
    Favourite.findAll({
        where: {
            userId: userId
        },
        include: [{
            model: Webtoon,
            as: 'WebtoonData'
        }]
    }).then(favourites => res.send(favourites));
};