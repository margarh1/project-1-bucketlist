// Database Functions

var db = require('../models');

function index(req, res) {
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) { return console.log(err); }
    res.json(user);
  });
};

function create(req, res) {
  var tagsArr = req.body.tags.split();
  // var newWish = new db.Wish({
  //   name: req.body.name,
  //   type: req.body.type,
  //   price: req.body.price,
  //   location: req.body.location,
  //   dateToVisit: req.body.dateToVisit,
  //   websiteLink: req.body.websiteLink,
  //   description: req.body.description,
  //   tags: tagsArr,
  //   status: req.body.status
  // });

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

};

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
