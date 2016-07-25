$('.js-add-paragraph').click(function() {
  event.preventDefault();
  console.log('ola');
  $('.js-body-letter').append('<textarea class="js-input-paragraph"></textarea>');
});
