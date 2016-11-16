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


// run server

app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
