/**
 * Created by dashyki on 24.12.2015.
 */
var Photo = require("../models/Photo").Photo;

getAll = function(callback) {
    Photo.find({}, function(err, data) {
        callback && callback(err, data);
    });
};

create = function() {
    var p = new Photo({photoPath: "path/to/image", tags: ["women", "beauty"]});
    p.save(function(err, photo, affected) {
        if (err) throw err;
        console.log(photo);
        console.log(affected);
    });
};

getByTags = function(tags, callback) {
    Photo.find({tags: { $all: tags }}, function(err, data) {
        callback && callback(err, data);
    });
};

module.exports.getAllPhotos = getAll;
module.exports.getPhotoByTags = getByTags;