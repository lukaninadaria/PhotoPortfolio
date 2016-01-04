/**
 * Created by dashyki on 24.12.2015.
 */
var Photo = require("../models/photo");
var path = require('path');
var config = require("../config/index");

function getAll(callback) {
    Photo.find({}, function(err, data) {
        callback && callback(err, data);
    });
};

function create(photoName) {
    var imagePath = path.join(config.get("photoStorage"), photoName);
    var p = new Photo({photoPath: imagePath, tags: ["town"]});
    p.save(function(err, photo, affected) {
        if (err) throw err;
        console.log(photo);
        console.log(affected);
    });
};

function getByTags(tags, callback) {
    Photo.find({tags: { $all: tags }}, function(err, data) {
        callback && callback(err, data);
    });
};

function getByTag(tag, callback) {
    Photo.find({tags: tag}, function(err, data) {
        callback && callback(err, data);
    });
};

module.exports.getAll = getAll;
module.exports.getByTags = getByTags;
module.exports.getByTag = getByTag;
module.exports.create = create;