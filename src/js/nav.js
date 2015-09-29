(function () {
  'use strict';

  $(function() {

    // detects menu button click and open/closes when appropriate
    $('#js-menu-toggle').click(function(event) {
      if($('#js-site-wrapper').hasClass('js-menu-open')) {
        $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').removeClass('js-menu-open');
      } else {
        $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').addClass('js-menu-open');
        event.stopPropagation();  // stops the detection occuring below as the menu is just now opening
      }
    });

    // detecting clicks outside of navbar when open & closes the menu when appropriate
    $(document).click(function(event) {
      var menu = $('.sidebar-nav'); // our actual nav menu
      var menuTop = $('.sidebar-nav-top'); // top portion that slides over as menu opens

      if($('#js-site-wrapper').hasClass('js-menu-open')) {
        if((!menu.is(event.target) && menu.has(event.target).length === 0) &&
          (!menuTop.is(event.target) && menuTop.has(event.target).length === 0)) {

          // element not a child of either menu variable so we close it
          $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').removeClass('js-menu-open');
        }
      }
    });

   });
}());
