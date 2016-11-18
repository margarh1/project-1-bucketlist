var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt');

var Wish = require('./wish.js');

var UserSchema = new Schema({
  username: String,
  email: String,
  passwordDigest: String,
  wishlist: [Wish.schema],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (email, password, callback) {
// `this` references our user model, since this function will be called from the model itself
// store it in variable `UserModel` because `this` changes context in nested callbacks

var UserModel = this;

// hash password user enters at sign up
bcrypt.genSalt(function (err, salt) {
  console.log('salt: ', salt);  // changes every time
  bcrypt.hash(password, salt, function (err, hash) {

    // create the new user (save to db) with hashed password
    UserModel.create({
      email: email,
      passwordDigest: hash
    }, callback);
  });
});
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
