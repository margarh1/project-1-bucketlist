var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bucketlist');

module.exports.User = require('./user.js');
module.exports.Place = require('./place.js');
module.exports.Person = require('./person.js');
module.exports.Thing = require('./thing.js');
module.exports.ContactInfo = require('./contactInfo.js');