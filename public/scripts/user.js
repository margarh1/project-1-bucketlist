console.log('app.js is connected!');

$(document).ready(function() {

  var userUrl = '/api/user/' + $('#wishes').attr('data-user-id');

  $.ajax({
    method: 'GET',
    url: userUrl,
    success: renderAllWishlists,
    error: onError
  });

  $('.add-wish').on('click', newWishForm);

  $('.to-homepage').on('click', function() {
    this.formAction = 'http://localhost:3000/';
  });

  $('#add-new-wish').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: userUrl,
      data: $(this).serialize(),
      success: renderWishlist,
      error: onError
    });
    var form = $(this).closest('form');
    form.find('input').prop('value', '');
    form.find('textarea').prop('value', '');
    form.find('input:checked').prop('checked', false);
  });

  $('#add-new-wish').on('click', '.cancel-button', clearForm);

  $('#wishes').on('click', '.delete-button', function() {
    var wishId = $(this).closest('.wish').attr('data-wish-id');
    var userId = userUrl + '/' + wishId;
    $.ajax({
      method: 'DELETE',
      url: userId,
      success: deletedWishlist,
      error: onError
    });
  });

  $('#wishes').on('click', '.edit-button', editForm);

  $('#wishes').on('click', '.save-changes', function() {
    console.log('save changes was clicked')
    var wishId = $(this).closest('.wish').attr('data-wish-id');
    var userId = $('#wishes').attr('data-user-id');
    var inputFields = $(this).closest('.wish').find('input');
    var updatedData = [];
    for (input of inputFields) {
      var value = encodeURIComponent(input.value);
      switch (input.className) {
        case ('wish-name'):
          updatedData.push('name=' + value);
          break;
        case ('wish-price'):
          updatedData.push('price=' + value);
          break;
        case ('wish-location'):
          updatedData.push('location=' + value);
          break;
        case ('wish-date'):
          updatedData.push('dateToVisit=' + value);
          break;
        case ('wish-description'):
          updatedData.push('description=' + value);
          break;
        case ('wish-tags'):
          updatedData.push('tags=' + value);
          break;
        case ('wish-status'):
          updatedData.push('status=' + value);
          break;
        case ('wish-contact-phone'):
          updatedData.push('phoneNumber=' + value);
          break;
        case ('wish-contact-address'):
          updatedData.push('address=' + value);
          break;
        case ('wish-contact-email'):
          updatedData.push('email=' + value);
          break;
      };
    };
    updatedData = updatedData.join('&');
    console.log(updatedData);
    $.ajax({
      method: 'PUT',
      url: '/api/user/' + userId + '/' + wishId,
      data: updatedData,
      success: updatedWishlist,
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

// function renderFriendsList(json) {
//   var friendSource = $('#friend-template').html();
//   var friendTemplate = Handlebars.compile(friendSource);
//   var friendHtml = friendTemplate(json);
//   console.log(friendHtml);
//   $('#wishes').append(friendHtml);
// };

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
  console.log('add wish clicked');
  renderWishlist();
  var newWish = $('.wish').eq(0);
  var inputSpans = newWish.find('span');
  for (var idx = 0; idx < inputSpans.length; idx++) {
    var current = inputSpans[idx];
    current.outerHTML = "<input class=" + current.className + "></input>";
  };
};

function deletedWishlist(json) {
  var deletedWish = '.wish[data-wish-id="' + json._id + '"';
  $(deletedWish).empty();
};

function clearForm() {
  var form = $(this).closest('form');
  form.find('input').prop('value', '');
  form.find('textarea').prop('value', '');
  form.find('input:checked').prop('checked', false);
};

function editForm() {
  console.log('edit was clicked')
  $(this).text('Save Changes');
  $(this).toggleClass('save-changes').removeClass('edit-button');
  var inputSpans = $(this).closest('.wish').find('span');
  for (var idx = 0; idx < inputSpans.length; idx++) {
    var current = inputSpans[idx];
    current.outerHTML = "<input class=" + current.className + "></input>";
    $(this).closest('.wish').find('input')[idx].defaultValue = current.textContent;
  };
};

function updatedWishlist(json) {
  console.log(json);
};
