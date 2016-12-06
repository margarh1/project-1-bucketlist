var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt');

var Wish = require('./wish.js');

var UserSchema = new Schema({
	username: String,
	email: String,
	passwordDigest: String,
	profileImage: String,
	wishlist: [Wish.schema],
	// TODO: Use a JOIN table for this.
	friends: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
  }]
});

// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (email, password, username, callback) {

	var UserModel = this;

	// hash password user enters at sign up
	bcrypt.genSalt(function (err, salt) {
		bcrypt.hash(password, salt, function (err, hash) {

			// create the new user (save to db) with hashed password
			UserModel.create({
				username: username,
				email: email,
				passwordDigest: hash
			}, callback);
		});
	});
};

// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (email, password, username, callback) {
	// find user by email entered at log in
	// remember `this` refers to the User for methods defined on userSchema.statics
	this.findOne({
		username: username
	}, function (err, foundUser) {

		// throw error if can't find user
		if (!foundUser) {
			callback("Error: no user found", null); // better error structures are available, but a string is good enough for now
			// if we found a user, check if password is correct
		} else if (foundUser.checkPassword(password)) {
			callback(null, foundUser);
		} else {
			callback("Error: incorrect password", null);
		}
	});
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
	// run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
	return bcrypt.compareSync(password, this.passwordDigest);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;


/*

User
  Followers: [Reffed Users]
  Followed: [Reffed Users]

JOINTABLE
FollowingTable

id_: regular db id
followed: User._id
following: User._id

*/
