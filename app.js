var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require("./config");
var photoApi = require('./api/photos');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'storage')));

app.get('/api/photos', photoApi.getAll);
app.get('/api/photos/women', photoApi.getWomen);
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(config.get("port"));

module.exports = app;
