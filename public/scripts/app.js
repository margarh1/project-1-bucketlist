console.log('app.js is connected!');

var sampleUsers = [
  {
    _id: 1,
    username: '123',
    password: '123',
    wishlist: [],
    friends: []
  },
  {
    _id: 2,
    username: '23455',
    password: '34567',
    wishlist: [],
    friends: []
  },
  {
    _id: 3,
    username:'23435467',
    password: '23456789',
    wishlist: [],
    friends: []
  }
];

var sampleWishes = [
  {
    _id: 11,
    name: "Monopoly",
    type: "Thing",
    price: "3.99",
    location: "", 
    dateToVisit: "",
    websiteLink: "",
    imgUrl: "",
    description: "It's a classic game and it's a shame I've never played it before",
    tags: ["board game"],
    status: "Pending",
    contactInfo: []
  },
  {
    _id: 12,
    name: "Sequoia National Park",
    type: "Place",
    price: "",
    location: "California 93271", 
    dateToVisit: "January 1, 2017",
    websiteLink: "https://www.nps.gov/seki/index.htm",
    imgUrl: "",
    description: "There's REALLY BIG TREES THERE!!!!!",
    tags: ["parks", "trees"],
    status: "Pending",
    contactInfo: []
  },
  {
    _id: 13,
    name: "Visit Home",
    type: "Person",
    price: "",
    location: "San Juan", 
    dateToVisit: "Christmas",
    websiteLink: "",
    imgUrl: "",
    description: "Looking forward to seeing my family~",
    tags: ["vacation", "home", "familiy"],
    status: "Pending",
    contactInfo: []
  }
];

var sampleContactInfo = [
  {
    _id: 21,
    phoneNumber: "(559) 565-3341",
    address: "California 93271",
    email: ""
  },
  {
    _id: 22,
    phoneNumber: "(123)456-7890",
    address: "987 W Almond Dr., Juneau, Alaska 62534",
    email: "thisisatestaddress@test.com"
  },
  {
    _id: 23,
    phoneNumber: "5102349817",
    address: "12598 Butterfly Ave., Apt 19, Buffalo, NY 18725",
    email: "verycoldhere@example.net"
  }
];


$(document).ready(function() {

  for (user of sampleUsers) {
    var idx = 0;
    for (wish of sampleWishes) {
      wish.contactInfo = sampleContactInfo[idx];
      idx++;
    }
    user.wishlist = sampleWishes;
  }
  for (wishlist of user.wishlist) { 
    renderWishlist(wishlist);
  }

});

function renderWishlist(json) {
  var wishSource = $('#wish-template').html();
  var wishTemplate = Handlebars.compile(wishSource);
  var wishHtml = wishTemplate(json);
  $('.row').append(wishHtml);
};




