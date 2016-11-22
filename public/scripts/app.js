console.log('app.js is connected!');

$(document).ready(function() {

  $('.learnMoreText').hide();

  $('.learn-more').on('click', function() {
    $('.textOnLoad').slideUp();
    $('.learnMoreText').slideDown();
  });

  $('.learn-more').on('dblclick', function() {
    $('.textOnLoad').slideDown();
    $('.learnMoreText').slideUp();
  });

});

