console.log('app.js is connected!');

$(document).ready(function() {

  var userUrl = '/api/user/' + $('#wishes').attr('data-user-id');

  $.ajax({
    method: 'GET',
    url: userUrl,
    success: renderAllWishlists,
    error: onError
  });

  $('.add-wish').on('click', function() {
    console.log('add wish clicked');
  });

  $('.to-homepage').on('click', function() {
    this.formAction = 'http://localhost:3000/';
  });

  $('#add-new-wish').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: userUrl,
      data: $(this).serialize(),
      success: renderAllWishlists,
      error: onError
    });
  });

  $('#wishes').on('click', '.delete-button', function() {
    console.log('delete button clicked');
    var wishId = $(this).closest('.wish').attr('data-wish-id');
    var userId = userUrl + '/' + wishId;
    $.ajax({
      method: 'DELETE',
      url: userId,
      success: deletedWishlist,
      error: onError
    });
  });

});

function renderWishlist(json) {
  var wishSource = $('#wish-template').html();
  var wishTemplate = Handlebars.compile(wishSource);
  var wishHtml = wishTemplate(json);
  $('#wishes').prepend(wishHtml);
};

function renderFriendsList(json) {
  var friendSource = $('#friend-template').html();
  var friendTemplate = Handlebars.compile(friendSource);
  var friendHtml = friendTemplate(json);
  console.log(friendHtml);
  $('#wishes').append(friendHtml);
}

function renderAllWishlists(json) {
  json.wishlist.forEach(function(wishes) {
    renderWishlist(wishes);
  });
};

function onError(xhr, status, errorThrown) {
  alert('Sorry, there was a problem!');
  console.log('Error: ' + errorThrown);
  console.log('Status: ' + status);
  console.dir(xhr);
};

function newWishForm() {
  
};

function deletedWishlist(json) {
  $('#wishes').detach('.wish');
  renderAllWishlists(json);
};



