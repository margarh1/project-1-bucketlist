// Database Functions

var db = require('../models');

function index(req, res) {
  db.User.findOne({username: req.params.username}, function(err, users) {
    if (err) { return console.log(err); }
    res.json(users);
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

  // newWish.save(function(err, wish) {
  //   if (err) { return console.log('error creating ' + wish); }
  //   console.log('created ' + wish);
  //   res.json(wish);
  // });
};

function show(req, res) {

};

function destroy(req, res) {

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