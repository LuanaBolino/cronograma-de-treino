$(document).ready(function() {
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validateForm() {
      const emailLoginInput = $('#emailLogin');
      const passwordLoginInput = $('#passwordLogin');
  
      // mensagens
      $('#emailLogin-error').text('');
      $('#passwordLogin-error').text('');
      emailLoginInput.removeClass('error');
      passwordLoginInput.removeClass('error');
  
      // e-mail
      const loginEmail = emailLoginInput.val();
      if (!validateEmail(loginEmail)) {
        $('#emailLogin-error').text('INVALID EMAIL');
        emailLoginInput.addClass('error');
        return;
      }
  
      //senha
      const password = passwordLoginInput.val();
      if (password === '') {
        $('#passwordLogin-error').text('ENTER A PASSWORD');
        passwordLoginInput.addClass('error');
        return;
      }
  
      window.location.replace('../home/home-login.html');
    }
    $('.btn-green').on('click', function() {
      validateForm();
    });
  });