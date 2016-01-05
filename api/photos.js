/**
 * Created by dashyki on 04.01.2016.
 */
var photoDal = require('../dal/photo');

function getAll(req, res) {
    var tags = req.query.tags;
    var callback = function(err, data) {
        res.json(data||{});
    };
    if (tags) {
        photoDal.getByTags(tags.split(','), callback)
    } else {
        photoDal.getAll(callback);
    }
}

function getWomen(req, res) {
    photoDal.getByTag('women', function(err, data) {
        res.json(data||{});
    });
}

module.exports.getAll = getAll;
module.exports.getWomen = getWomen;