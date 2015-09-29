(function () {
   'use strict';

   $(function() {
     $('#js-menu-toggle').click(function() {
       if($('#js-site-wrapper').hasClass('js-menu-open')) {
         $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').removeClass('js-menu-open');
       } else {
         $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').addClass('js-menu-open');
       }
     });
   });
}());
