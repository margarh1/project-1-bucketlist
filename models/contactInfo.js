var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ContactInfoSchema = new Schema({
  phoneNumber: String,
  address: String, // change to API object later?
  email: String
});

var ContactInfo = mongoose.model('ContactInfo', ContactInfoSchema);

module.exports = ContactInfo;