var db = require('./models');

var sampleUsers = [
  {
    email: 'onetwothree',
    username: 'onetwothree',
    password: '123',
    profileImage: '../img/user_profile_img.png',
    wishlist: [],
    friends: []
  },
  {

    email: '23455',
    username: '23455',
    password: '34567',
    profileImage: '../img/user_profile_img.png',
    wishlist: [],
    friends: []
  },
  {
    email:'23435467',
    username:'23435467',
    password: '23456789',
    profileImage: '/public/img/user_profile_img.png',
    wishlist: [],
    friends: []
  },
  {
    email: 'thisisatest@example.com',
    username: 'guest',
    password: 'testing',
    profileImage: './public/img/user_profile_img.png',
    wishlist: [],
    friends: []
  }
];

var sampleWishes = [
  {
    name: "Monopoly",
    type: "thing",
    price: "3.99",
    location: "",
    dateToVisit: "",
    websiteLink: "",
    imgUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRM3xrG5U1-RX8vBuT2roOg5n1giS4if3PAg7wtB05-Wbs0tisD",
    description: "It's a classic game and it's a shame I've never played it before",
    tags: ["board game"],
    status: "Pending",
    contactInfo: []
  },
  {
    name: "Sequoia National Park",
    type: "place",
    price: "",
    location: "California 93271",
    dateToVisit: "January 1, 2017",
    websiteLink: "https://www.nps.gov/seki/index.htm",
    imgUrl: "http://www.grindtv.com/wp-content/uploads/2014/05/SequoiaNationalPark001.jpg",
    description: "There's REALLY BIG TREES THERE!!!!!",
    tags: ["parks", "trees"],
    status: "Pending",
    contactInfo: []
  },
  {
    name: "Visit Home",
    type: "person",
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
    if (user.username !== 'guest') {
      var idx = 0;
      for (wish of sampleWishes) {
        wish.contactInfo = sampleContactInfo[idx];
        user.wishlist.push(sampleWishes[idx]);
        idx++;
      };
    };
  });

  db.User.create(sampleUsers, function(err, users) {
    if (err) { return console.log('Error adding seed data: ' + err) }
    process.exit();
  });
});
