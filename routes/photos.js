/**
 * Created by dashyki on 29.12.2015.
 */
var express = require('express');
var router = express.Router();
var photoDal = require('../dal/photo');

router.get('/', function(req, res) {
    photoDal.getAllPhotos(function(err, data) {
        res.json(data||{});
    });
});

module.exports = router;