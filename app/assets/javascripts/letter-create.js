$('.js-create-letter').click(function() {
  event.preventDefault();

  var letterBody = [];
  $('.js-input-paragraph').each(function() { letterBody.push(this.value) });

  $.ajax({
    type: 'POST',
    data: {
      letter: {
        title:  $('.js-input-title').val(),
        logo: $('.js-input-logo').val(),
        body: letterBody
      }
    },
    url: '/letters',
    success: function(data) {
      console.log('good');
    },
    error: function() {
      console.log('bad')
    }
  });
});
