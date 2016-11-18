// SERVER-SIDE JAVASCRIPT

// server prep
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'hbs');



var controllers = require('./controllers');
var db = require('./models');
var User = require('./models/user');

// routes

// HTML
app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/user/:username', function wishlist(req, res) {
    db.User.findOne({
        username: req.params.username
    }, function(err, foundUser) {
        res.render('user', {
            user: foundUser
        });
    });
});

// JSON
app.get('/api/user/:username', controllers.wish.index);
app.post('/api/user/:username', controllers.wish.create);
app.get('/api/user/:username/:wish', controllers.wish.show);
app.delete('/api/user/:username/:wish', controllers.wish.destroy);


//////// SIGN UP AND LOG IN

// signup route with placeholder response
app.get('/signup', function(req, res) {
    res.render('signup');
});

// A create user route - creates a new user with a secure password
app.post('/users', function(req, res) {
    console.log("email: " + req.body.email);
    console.log("password: " + req.body.password);
    // use the email and password to authenticate here
    User.createSecure(req.body.email, req.body.password, function(err, user) {
        res.render('profile', {user: user});
    });
});

// login route with placeholder response
app.get('/login', function(req, res) {
    res.send('login coming soon');
});



// run server

app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
