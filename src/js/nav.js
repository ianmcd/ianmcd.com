(function () {
  'use strict';

  function openMenu() {
    // detaching and reattaching menu bar as a work-around
    // so everything plays nicely with our layers and z-index
    var toggleWrapper = $('#js-toggle-wrapper').detach();
    $('body').prepend(toggleWrapper);

    // basic css adjustment shiz
    $('.layer-page-inner').css('padding-top', '70px');
    $('#js-site-wrapper, #js-menu-toggle, #js-toggle-wrapper').addClass('js-menu-open');

    // if we're full desktop width some addt'l adjustments need to be made
    if($('body').width() > 1100) {
      $('#js-toggle-wrapper').css({
        'max-width': '100%',
        'width': '1100px'
      }).animate({
        'width': $('body').width()
      }, 500, function() {
        // adding a class so we know to fix our full-desktop-width stuff on closing
        $(this).addClass('js-animated').css('width', '100%');
      });
    }
  }

  function closeMenu() {
    // moving our toggle bar back into the actual page
    var toggleWrapper = $('#js-toggle-wrapper').detach();
    $('.layer-page-inner').prepend(toggleWrapper);

    // did we animate this initially? if so let's reset things
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

    // reset our basic css adjustments
    $('.layer-page-inner').css('padding-top', '');
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
      var menu = $('.nav-sidebar'); // our actual nav menu
      var menuTop = $('.nav-toggle-wrapper__top'); // top portion that slides over as menu opens

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
