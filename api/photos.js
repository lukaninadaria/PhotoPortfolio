/**
 * Created by dashyki on 04.01.2016.
 */
var photoDal = require('../dal/photo');

function getAll(req, res) {
    photoDal.getAll(function(err, data) {
        res.json(data||{});
    });
}

function getWomen(req, res) {

}

module.exports.getAll = getAll;
module.exports.getWomen = getWomen;