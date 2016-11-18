// Database Functions

var db = require('../models');

function index(req, res) {
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) { return console.log(err); }
    res.json(user);
  });
};

function create(req, res) {
  console.log(req.body)
  var tagsArr = req.body.tags.split();
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) { return console.log(err); }
    user.wishlist.push(req.body);
    user.save(function(err, user) {
      if (err) { return console.log('error creating ' + wish) }
      console.log('created ' + req.body.name);
      res.json(req.body);
    });
  });
};

function show(req, res) {
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) {return console.log(err)};
    for (wish of user.wishlist) {
      if (req.params.wish === wish._id.toString()) {
        res.json(wish);
        break;
      };
    };
  });
};

function destroy(req, res) {
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) {return console.log(err)};
    for (wish of user.wishlist) {
      if (req.params.wish === wish._id.toString()) {
        var wishNum = user.wishlist.indexOf(wish);
        user.wishlist.splice(wishNum, 1);
        user.save(function(err, user) {
          if (err) {return console.log(err)};
          res.json(wish);
        });
      };
    };
  });
};

function update(req, res) {
  var tagsArr = req.body.tags.split();
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) {return console.log(err)};
    for (wish of user.wishlist) {
      if (req.params.wish === wish._id.toString()) {
        wish.name = req.body.name,
        wish.price = req.body.price,
        wish.location = req.body.location,
        wish.dateToVisit = req.body.dateToVisit,
        wish.description = req.body.description,
        wish.tags = tagsArr,
        wish.status = req.body.status
        wish.contactInfo.phoneNumber = req.body.phoneNumber,
        wish.contactInfo.address = req.body.address,
        wish.contactInfo.email = req.body.email
      };
    };
    user.save(function(err, user) {
      if (err) {return console.log('error updating ' + user)};
      res.json(user);
    })
  });
};

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
