var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  wishlist: [{
    type: Schema.Types.ObjectId,
    ref: String
  }],
  friends: [User.schema]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;