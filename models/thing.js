var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  price: String,
  websiteLink: String,
  imgUrl: String,
  comments: String,
  tags: String,
  status: String
});

var Thing = mongoose.model('Thing', ThingSchema);

module.exports = Thing;