$('.js-subscribe').click(function() {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    data: { contact: { email:  $('.js-input').val() } },
    url: 'contacts',
    success: function(data) {
      $('.js-message').addClass('-active');
      $('.input-container').addClass('-hidden');
    },
    error: function() {
    }
  });
});
