$('.letter-body .btn').click(function () {
  $(this).addClass('-hidden');
  $('.input-container').addClass('-active');
});

$('.js-subscribe-proposal').click(function() {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    data: { client: { email:  $('.js-input-proposal').val() } },
    url: '/clients',
    success: function(data) {
      $('.js-message').addClass('-active');
      $('.input-container').removeClass('-active');
      $('.input-container').addClass('-hidden');
    },
    error: function() {
    }
  });
});
