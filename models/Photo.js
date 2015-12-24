/**
 * Created by dashyki on 24.12.2015.
 */
var mongoose = require("../libs/mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema({
    photoPath: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    modelname: {
        type: String
    },
    description: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports.Photo = mongoose.model("Photo", schema);