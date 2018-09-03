jQuery(document).ready(function ($) {

  "use strict";

  const isLogged = !!window.localStorage.getItem('login');
  if (isLogged) {
    hideLogin();
  } else {
    showLogin();
  }

  $('#btn-login').click(function (event) {
    event.preventDefault();
    const email = $('#login-email-input').val();
    const password = $('#login-email-password').val();

    // Fake login values
    if (email === 'a' && password === 'b') {
      const rememberMe = $('#login-remember-me').is(':checked');
      $('#login-form-container').find('form')[0].reset();
      doLogin('Manolo', rememberMe);
    } else {
      loginError();
    }
  });

  $('#logout-btn').click(function (event) {
    event.preventDefault();
    showLogin();
    window.localStorage.clear();
  });

  function showLogin() {
    $('body').addClass('bg-dark');
    $('#body-container').hide();
    $('#login-form-container').show();
  }

  function hideLogin() {
    $('#body-container').show();
    $('body').removeClass('bg-dark');
    $('#login-form-container').hide();
  }

  function doLogin(username, rememberMe) {
    if (rememberMe) {
      window.localStorage.setItem('login', username);
    }
    hideLogin();
  }

  function loginError() {
    console.error('Error!!');
  }
});
