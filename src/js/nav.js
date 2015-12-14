(function () {
  'use strict';

  $('#js-nav').hover(
    function() {
      $('html').css('overflow-x', 'hidden');
      $('#js-nav').addClass('js-max');
      $('#js-content').addClass('js-push');

    }, function () {
      $('#js-nav').removeClass('js-max');
      $('#js-content').removeClass('js-push');
      setTimeout(function() {
        $('html').css('overflow-x', '');
      }, 300);

    }
  );
}());
