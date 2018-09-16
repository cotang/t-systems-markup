jQuery(document).ready(function($){

  // $('.nav__item--dropdown .nav__link').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.header').find('.menu-services').show();
  // });

  $('.main-gallery__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    appendArrows: $('.main-gallery__controls')
  });

  $('.up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });



  $('.hamburger').click(function(e) {
      e.preventDefault();
      $('.nav__list').slideToggle();
  });



  $(window).scroll(function () {
    // if ($(window).width() >= 768) {
      if ($(this).scrollTop() > 0 ) {
        $('.header').addClass('header--sticky');
      } else {
        $('.header').removeClass('header--sticky');
      }
    // }
  });



});
