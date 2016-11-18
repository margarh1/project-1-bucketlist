var db = require('./models');

var sampleUsers = [
  {
    username: 'onetwothree',
    password: '123',
    wishlist: [],
    friends: []
  },
  {
    username: '23455',
    password: '34567',
    wishlist: [],
    friends: []
  },
  {
    username:'23435467',
    password: '23456789',
    wishlist: [],
    friends: []
  }
];

var sampleWishes = [
  {
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
    phoneNumber: "(559) 565-3341",
    address: "California 93271",
    email: ""
  },
  {
    phoneNumber: "(123)456-7890",
    address: "987 W Almond Dr., Juneau, Alaska 62534",
    email: "thisisatestaddress@test.com"
  },
  {
    phoneNumber: "5102349817",
    address: "12598 Butterfly Ave., Apt 19, Buffalo, NY 18725",
    email: "verycoldhere@example.net"
  }
];

db.User.remove({}, function(err, users) {
  sampleUsers.forEach(function(user) {
    var idx = 0;
    for (wish of sampleWishes) {
      wish.contactInfo = sampleContactInfo[idx];
      idx++;
    };
    user.wishlist = sampleWishes;
    // user.friends.push(sampleUsers[idx]);
  });

  // sampleUsers[0].friends.push(sampleUsers[1]);
  // sampleUsers[1].friends.push(sampleUsers[2]);
  // sampleUsers[2].friends.push(sampleUsers[0]);

  db.User.create(sampleUsers, function(err, users) {
    if (err) { return console.log('Error adding seed data: ' + err) }
    console.log("created " + users.length + ' users');
    process.exit();
  });
});





