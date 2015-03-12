$(document).ready(function() {

  $('.touch .main-nav').on('click', 'a', function(e) {
    var $this = $(this);
        $dropdown = $this.siblings('.js-dropdown');
    if ($dropdown.length < 1)
      return;

    if ($dropdown.hasClass('open')) {
      $dropdown.removeClass('open');
      $this.removeClass('current');
    } else {
      $dropdown.parents('.main-nav').find('.js-dropdown').removeClass('open');
      $dropdown.parents('.main-nav').find('a').removeClass('current');
      $dropdown.addClass('open');
      $this.addClass('current');
    }

    e.preventDefault();

  });

  $('.no-touch .main-nav').on('mouseover', 'a', function () {
    var $dropdown = $(this).siblings('.js-dropdown');
    if ($dropdown.length < 1) $dropdown = $(this).parents('.js-dropdown');

    $dropdown.siblings('a').addClass("current");
    $dropdown.addClass('open');
  }).on('mouseleave', 'a', function () {
    var $dropdown = $(this).siblings('.js-dropdown');
    if ($dropdown.length < 1) $dropdown = $(this).parents('.js-dropdown');

    $dropdown.siblings('a').removeClass("current");
    $dropdown.removeClass('open');
  });

  $('.js-accordion h2').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).closest('.js-accordion').find('.js-accordionInside').not(':animated').slideToggle();
  });

  $('#treehouse-gallery a').fancybox({
    beforeShow : function() {
      var alt = this.element.find('img').attr('alt');
      this.inner.find('img').attr('alt', alt);
      this.title = alt;
    }
  });


  /* Mobile Stuff */
  $('.js-mobileSearch').click(function() {
    var searchBox = $('.search-form');

    if(searchBox.is(':visible')) {
      $(this).removeClass('current');
      searchBox.stop().slideUp();
    } else {
      $(this).addClass('current');
      searchBox.stop().slideDown();
    }

    return false;
  });

  $('.js-mobileNav').click(function() {
    var mainNav = $('.main-nav');

    if(mainNav.is(':visible')) {
      $(this).removeClass('current');
      mainNav.stop().slideUp();
    } else {
      $(this).addClass('current');
      mainNav.stop().slideDown();
    }

    return false;
  });
});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
