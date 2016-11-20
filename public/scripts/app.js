console.log('app.js is connected!');

$(document).ready(function() {

  $('.create-bucket-list').on('click', function() {
    console.log('create bucket list was clicked')
    this.formAction = "http://localhost:3000/user/testingempty";
  });

});

function renderWishlist(json) {
  console.log(json)
  var wishSource = $('#wish-template').html();
  var wishTemplate = Handlebars.compile(wishSource);
  var wishHtml = wishTemplate(json);
  $('#wishes').append(wishHtml);
};

// function renderFriendsList(json) {
//   var friendSource = $('#friend-template').html();
//   var friendTemplate = Handlebars.compile(friendSource);
//   var friendHtml = friendTemplate(json);
//   $('.row').append(friendHtml);
// }

function renderAllWishlists(json) {
  json.forEach(function(user) {
    for (wishlist of user.wishlist) {
      renderWishlist(wishlist);
    };
    // user.friends.forEach(function(friends) {
    //   renderFriendsList(friends);
    // });
  });
};

function onError(xhr, status, errorThrown) {
  alert('Sorry, there was a problem!');
  console.log('Error: ' + errorThrown);
  console.log('Status: ' + status);
  console.dir(xhr);
};
