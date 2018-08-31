$.noConflict();

jQuery(document).ready(function ($) {

  "use strict";

  [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
    new SelectFx(el);
  });

  jQuery('.selectpicker').selectpicker;


  $('#menuToggle').on('click', function (event) {
    $('body').toggleClass('open');
  });

  $('.search-trigger').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $('.search-trigger').parent('.header-left').addClass('open');
  });

  $('.search-close').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $('.search-trigger').parent('.header-left').removeClass('open');
  });

  // $('.user-area> a').on('click', function(event) {
  // 	event.preventDefault();
  // 	event.stopPropagation();
  // 	$('.user-menu').parent().removeClass('open');
  // 	$('.user-menu').parent().toggleClass('open');
  // });

  loadContent();

  function loadContent() {
    $('#left-panel').load('navbar.html');
    $('#header').load('header.html');
    $('#main-container').load('pages/home.html');
  }
});

function loadPage(pageName, event) {
  event.preventDefault();
  const target = jQuery(event.target);
  const parentUL = target.parents('ul').get(0);
  const currentLI = target.parents('li').get(0);
  disableAllaNavBarItems(parentUL);
  jQuery(currentLI).addClass('active');
  jQuery('#main-container').load('pages/' + pageName + '.html');
}

function disableAllaNavBarItems(ul) {
  jQuery(ul).find('li').each(function () {
    jQuery(this).removeClass('active');
  })
}
