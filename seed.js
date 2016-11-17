
var db = require('./models');

var places_list= [
{
  name: "Sequoia National Park",
  location: "California 93271", // change to API object in future?
  dateToVisit: "January 1, 2017",
  websiteLink: "https://www.nps.gov/seki/index.htm",
  imgUrl: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwj0kLjfu67QAhVK_IMKHakDC24QjRwIBw&url=http%3A%2F%2Fwww.gamewarden.org%2Fconservation-challenge-sequoia&psig=AFQjCNEe1I_Z3srKPHQz9qNX4mlHFGqOxA&ust=1479426611811366",
  comments: "",
  tags: [String],
  status: "Pending"
},

{


},

{


}

];

var things_list = [
{

},

{

},

{

}

];

var persons_list = [
  {
    name: String,
    contactInfo: {
      type: Schema.Types.ObjectId,
      ref: 'ContactInfo'
    },
    imgUrl: String,
    comments: String,
    tags: [String],
    status: String
  },

  {

  },

  {

  }

];
