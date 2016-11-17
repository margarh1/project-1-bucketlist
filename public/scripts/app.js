console.log('app.js is connected!');

$(document).ready(function() {

  // code

});

function onError(xhr, status, errorThrown) {
  alert('Sorry, there was a problem!');
  console.log('Error: ' + errorThrown);
  console.log('Status: ' + status);
  console.dir(xhr);
};



