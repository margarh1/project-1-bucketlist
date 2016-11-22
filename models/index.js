var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bucketlist');

module.exports.User = require('./user.js');
module.exports.Wish = require('./wish.js');
module.exports.ContactInfo = require('./contactInfo.js');