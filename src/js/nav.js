(function () {
  'use strict';

  var navPinned = Cookies.get('imcd_nav-pin') || false;

  var unpinNav = function() {
    navPinned = false;
    $('#js-content').css('transition', 'none');
    $('#js-nav').addClass('js-max').removeClass('js-nav-pin');
    $('#js-content').addClass('js-push').removeClass('js-content-pin');
    $('#js-nav-pin').text('pin').removeClass('active');
    $('html').css('overflow-x', 'hidden');
    setTimeout(function() {
      $('#js-content').css('transition', '');
    }, 300);
    Cookies.remove('imcd_nav-pin');
  }

  var pinNav = function() {
    navPinned = true;
    $('#js-nav').addClass('js-nav-pin').removeClass('js-max');
    $('#js-content').addClass('js-content-pin').removeClass('js-push');
    $('html').css('overflow-x', '');
    $('#js-nav-pin').text('unpin').addClass('active');
    Cookies.set('imcd_nav-pin', 'true', { expires: 21 });
  }

  $(function() {
    if(navPinned) {
      pinNav();
    }

    $('#js-nav').hover(
      function() {
        if (navPinned === false) {
          $('html').css('overflow-x', 'hidden');
          $('#js-nav').addClass('js-max');
          $('#js-content').addClass('js-push');
        }
      }, function () {
        if (navPinned === false) {
          $('#js-nav').removeClass('js-max');
          $('#js-content').removeClass('js-push');
          setTimeout(function() {
            $('html').css('overflow-x', '');
          }, 300);
        }
      }
    );


    $('#js-nav-pin').click(function() {
      if (navPinned) {
        unpinNav();
      } else {
        pinNav();
      }
    });
  });
}());
