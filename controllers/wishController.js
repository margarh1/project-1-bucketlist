// Database Functions

var db = require('../models');

function index(req, res) {
  console.log(req.params)
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) { return console.log(err); }
    res.json(user);
  });
};

function create(req, res) {
  console.log(req.params);
  var tagsArr = req.body.tags.split();
  var newWish = new db.Wish({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    location: req.body.location,
    dateToVisit: req.body.dateToVisit,
    websiteLink: req.body.websiteLink,
    description: req.body.description,
    tags: tagsArr,
    status: req.body.status
  });

  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) { return console.log(err); }
    user.wishlist.push(newWish);
    user.save(function(err, user) {
      if (err) { return console.log('error creating ' + wish) }
      console.log('created ' + newWish);
      res.json(user);
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
  console.log(req.params)
  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) {return console.log(err)};
    for (wish of user.wishlist) {
      if (req.params.wish === wish._id.toString()) {
        var wishNum = user.wishlist.indexOf(wish);
        user.wishlist.splice(wishNum, 1);
        user.save(function(err, user) {
          if (err) {return console.log(err)};
          res.json(user);
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
