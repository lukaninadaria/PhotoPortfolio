var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require("./config");

var routes = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(config.get("port"), function () {
    console.log("Server created");
});

module.exports = app;
