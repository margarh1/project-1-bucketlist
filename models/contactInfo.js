var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ContactInfoSchema = new Schema({
  phoneNumber: String,
  address: String,
  email: String
});

var ContactInfo = mongoose.model('ContactInfo', ContactInfoSchema);

module.exports = ContactInfo;