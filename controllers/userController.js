// Database Functions


for (user of sampleUsers) {
  var idx = 0;
  for (wish of sampleWishes) {
    wish.contactInfo = sampleContactInfo[idx];
    idx++;
  }
  user.wishlist = sampleWishes;
  // user.friends.push(sampleUsers[idx]);
}
sampleUsers[0].friends.push(sampleUsers[1]);
sampleUsers[1].friends.push(sampleUsers[2]);
// sampleUsers[2].friends.push(sampleUsers[0]);

var db = require('../models');

function index(req, res) {
  for (user of sampleUsers) {
    if (user.username === req.params.username) {
      res.json(user);
    };
  };
  res.json(sampleUsers);
};

function create(req, res) {




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
