var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var Wish = require('./wish.js');

var UserSchema = new Schema({
  username: String,
  password: String,
  wishlist: [Wish.schema],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;