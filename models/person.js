var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  contactInfo: {
    type: Schema.Types.ObjectId,
    ref: 'ContactInfo'
  },
  imgUrl: String,
  comments: String,
  tags: [String],
  status: String
});

var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;