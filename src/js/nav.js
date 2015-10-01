(function () {
  'use strict';

  function openMenu() {
    var toggleWrapper = $('#js-toggle-wrapper').detach();
    $('body').prepend(toggleWrapper);
    $('.page-inner').css('padding-top', '70px');
    $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').addClass('js-menu-open');
    if($('body').width() > 1100) {
      $('#js-toggle-wrapper').css({
        'max-width': '100%',
        'width': '1100px'
      }).animate({
        'width': $('body').width()
      }, 500, function() {
        $(this).addClass('js-animated').css('width', '100%');
      });
    }
  }

  function closeMenu() {
    var toggleWrapper = $('#js-toggle-wrapper').detach();
    $('.page-inner').prepend(toggleWrapper);
    if($('#js-toggle-wrapper').hasClass('js-animated')) {
      var navWidth = $('body').width() > 1100 ? '1100px' : '100%';
      console.log(navWidth);
      $('#js-toggle-wrapper').animate({
        'width': navWidth
      }, 500, function() {
        $(this).css({
          'max-width': '',
          'width': ''
        }).removeClass('animated');
      });
    }
    $('.page-inner').css('padding-top', '');
    $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').removeClass('js-menu-open');
  }

  $(function() {

    // detects menu button click and open/closes when appropriate
    $('#js-menu-toggle').click(function(event) {
      if($('#js-site-wrapper').hasClass('js-menu-open')) {
        closeMenu();
      } else {
        openMenu();
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
          closeMenu();
        }
      }
    });

   });
}());
