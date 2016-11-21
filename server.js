// SERVER-SIDE JAVASCRIPT

// server prep
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
// mongoose.connect('mongodb://localhost/project-1-bucketlist');
var controllers = require('./controllers');
var db = require('./models');
var User = require('./models/user');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: true
}));

// middleware (new addition)
// set session options
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 30 * 60 * 1000 }
}));

// custom middleware - should go before routes
 // adds a currentUser method to the request (req) that can find the user currently logged in based on the request's `session.userId`
 app.use('/', function (req, res, next) {
   req.currentUser = function (callback) {
     User.findOne({_id: req.session.userId}, function (err, user) {
       if (!user) {
         callback("No User Found", null)
       } else {
         req.user = user;
         callback(null, user);
       }
     });
   };

   next();
 });


// HTML
app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/user/:username', function wishlist(req, res) {
    User.findOne({
        username: req.params.username
    }, function(err, foundUser) {
        res.render('user', {
            user: foundUser
        });
    });
});

// JSON
app.get('/api/user', function(req, res) {
  db.User.find({}, function(err, allUsers) {
    if (err) {return console.log(err)};
    res.json(allUsers);
  });
});

app.get('/api/user/:username', controllers.wish.index);
app.post('/api/user/:username', controllers.wish.create);
app.get('/api/user/:username/:wish', controllers.wish.show);
app.delete('/api/user/:username/:wish', controllers.wish.destroy);
app.put('/api/user/:username/:wish', controllers.wish.update);


//////// SIGN UP AND LOG IN

// signup route with placeholder response
app.get('/signup', function(req, res) {
    res.render('signup');
});

// A create user route - creates a new user with a secure password
app.post('/users', function(req, res) {
    console.log("email: " + req.body.email);
    console.log("password: " + req.body.password);
    console.log("username: " + req.body.username);
    // use the email and password to authenticate here
    User.createSecure(req.body.email, req.body.password, req.body.username, function(err, newUser) {

        req.session.userId = newUser._id;
        res.redirect('/profile');
        // res.render('user', {user: user});
    });
});


// login route with placeholder response
app.get('/login', function(req, res) {
    res.render('login');
});

// authenticate the user and set the session
app.post('/sessions', function (req, res) {
  // call authenticate function to check if password user entered is correct
  User.authenticate(req.body.email, req.body.password, req.body.username, function (err, loggedInUser) {
    if (err){
      console.log('authentication error: ', err);
      res.status(500).send();
    } else {
      console.log('setting session user id ', loggedInUser._id);
      req.session.userId = loggedInUser._id;
      res.redirect('/profile');
    }
  });
});

// show user profile page
app.get('/profile', function (req, res) {
  console.log('session user id: ', req.session.userId);
  // find the user currently logged in
  User.findOne({_id: req.session.userId}, function (err, currentUser) {

    if (err){
      console.log('database error: ', err);
      res.redirect('/login');
    } else {
      // render profile template with user's data
      console.log('loading profile of logged in user');
      res.render('user.hbs', {user: currentUser});
    }
  });
});

//server.js
app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  req.user = null;
  // redirect to login (for now)
  res.redirect('/login');
});



// run server

app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
