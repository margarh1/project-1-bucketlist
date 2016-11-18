// SERVER-SIDE JAVASCRIPT

// server prep
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

var controllers = require('./controllers');
var db = require('./models');

// routes

// HTML
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/user/:username', function wishlist(req, res) {
  db.User.findOne({username: req.params.username}, function(err, foundUser) {
    res.render('user', {user: foundUser});
  });
});

// app.get('/user/:username/:wish', function wish(req, res) {
  // db.User.findOne({username: req.params.username}, function(err, foundUser) {
  //   res.render('user', {user: foundUser})
  // })
// })

// JSON
app.get('/api/user/:username', controllers.wish.index);
app.post('/api/user/:username', controllers.wish.create);
app.get('/api/user/:username/:wish', controllers.wish.show);
app.delete('/api/user/:username/:wish', controllers.wish.destroy);
app.put('/api/user/:username/:wish', controllers.wish.update);

// run server

app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
