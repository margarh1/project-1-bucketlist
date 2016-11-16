var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  name: String,
  location: String, // change to API object in future?
  dateToVisit: String,
  websiteLink: String,
  imgUrl: String,
  comments: String,
  tags: [String],
  status: String
});

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;