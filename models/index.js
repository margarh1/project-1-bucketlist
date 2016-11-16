var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bucketlist');

module.exports.User = require('./user');