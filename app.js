var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require("./config");
var routes = require('./routes/index');
var photos = require('./routes/photos');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);
app.use('/api/photos', photos);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(config.get("port"));

module.exports = app;
