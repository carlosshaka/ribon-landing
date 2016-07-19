$('.js-subscribe').click(function() {
  event.preventDefault();

  $.ajax({
    success: function(data) {
      console.log($('.js-input').val());
    },
    error: function() {
      console.log('error');
    }
  });
});
