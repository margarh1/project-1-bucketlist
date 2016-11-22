console.log('app.js is connected!');

$(document).ready(function() {

  $('.learnMoreText').hide();

  $('.learn-more').on('click', function() {
    console.log('learn more clicked')
    $('.textOnLoad').slideUp();
    $('.learnMoreText').slideDown();
  });

  $('.learn-more').on('dblclick', function() {
    console.log('learn more clicked')
    $('.textOnLoad').slideDown();
    $('.learnMoreText').slideUp();
  });

});

