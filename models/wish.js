var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var Contact = require('./contactInfo.js');

var WishSchema = new Schema({
  name: String,
  type: String,
  price: String,
  location: String, // possibly change to API object in future
  dateToVisit: String,
  websiteLink: String,
  imgUrl: String,
  description: String,
  tags: [String],
  status: String,
  contactInfo: [Contact.schema]
});

var Wish = mongoose.model('Wish', WishSchema);

module.exports = Wish;