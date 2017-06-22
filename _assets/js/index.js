$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

 function myFunction(x) {
      x.classList.toggle("change");
      var z = document.getElementById('sub_nav');
      if (z.style.display === 'block') {
        z.style.display = 'none';
      } else {
        z.style.display = 'block';
      }
    }