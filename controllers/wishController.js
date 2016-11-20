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
  var newContactInfo = {
    phoneNumber: req.body.contactInfoPhone,
    address: req.body.contactInfoAddress,
    email: req.body.contactInfoEmail
  };
  var tagsArr = req.body.tags.split();

  var newWish = new db.Wish({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    location: req.body.location,
    dateToVisit: req.body.dateToVisit,
    websiteLink: req.body.websiteLink,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
    tags: tagsArr,
    status: req.body.status,
    contactInfo: newContactInfo
  });

  db.User.findOne({username: req.params.username}, function(err, user) {
    if (err) { return console.log(err); }
    user.wishlist.push(newWish);
    user.save(function(err, user) {
      if (err) { return console.log('error creating ' + newWish.name) }
      console.log('created ' + newWish.name);
      res.json(newWish);
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
        console.log(req.body.phoneNumber);
        console.log(wish.contactInfo);
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

        user.save(function(err, user) {
          if (err) {return console.log('error updating ' + user)};
          res.json(wish);
        });
      };
    };
  });
};

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
