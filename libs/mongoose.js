/**
 * Created by dashyki on 23.12.2015.
 */
var mongoose = require('mongoose');
var config = require("../config");
mongoose.connect(config.get("mongoose:uri"), config.get("mongoose:options"), function() {
    //mongoose.disconnect();
});

module.exports = mongoose;