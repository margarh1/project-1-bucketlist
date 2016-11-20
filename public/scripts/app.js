console.log('app.js is connected!');

$(document).ready(function() {

  $('.create-bucket-list').on('click', function() {
    console.log('create bucket list was clicked')
    this.formAction = "http://localhost:3000/user/testingempty";
  });

});

