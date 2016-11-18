console.log('app.js is connected!');

$(document).ready(function() {

  // $.ajax({
  //   method: 'GET',
  //   url: '/api/user',
  //   success: renderAllWishlists,
  //   error: onError
  // });
  //
  // $.ajax({
  //   method: 'GET',
  //   url: '/api/user/:username',
  //   success: renderWishlist,
  //   error: onError
  // });

});

function renderWishlist(json) {
  console.log(json)
  var wishSource = $('#wish-template').html();
  var wishTemplate = Handlebars.compile(wishSource);
  var wishHtml = wishTemplate(json);
  $('#wishes').append(wishHtml);
};

function renderFriendsList(json) {
  var friendSource = $('#friend-template').html();
  var friendTemplate = Handlebars.compile(friendSource);
  var friendHtml = friendTemplate(json);
  $('.row').append(friendHtml);
}

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
