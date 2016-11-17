// SERVER-SIDE JAVASCRIPT

// server prep
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

var controllers = require('./controllers');
var db = require('./models');

// routes

// HTML
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/user/:username', function wishlist(req, res) {
  res.sendFile(__dirname + '/views/user.html');
});

// JSON
app.get('/api/user', controllers.user.index);

app.get('/api/user/:username', controllers.user.index);

// run server

app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
