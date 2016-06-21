$(function() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 350) {
      $('.component__to-top').addClass('js-active');
    } else {
      $('.component__to-top').removeClass('js-active');
    }
  });

  $('.component__to-top').click(function(){
    $('html, body').animate({scrollTop : 0},300);
    return false;
  });
});
