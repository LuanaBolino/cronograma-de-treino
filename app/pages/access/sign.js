$(document).ready(function() {
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validateForm() {
      const nameInput = $('#name');
      const emailInput = $('#email');
      const passwordInput = $('#password');
      const confirmPasswordInput = $('#confirmPassword');
  
      // mensagens
      $('#name-error').text('');
      $('#email-error').text('');
      $('#password-error').text('');
      $('#confirmPassword-error').text('');
      
      nameInput.removeClass('error');
      emailInput.removeClass('error');
      passwordInput.removeClass('error');
      confirmPasswordInput.removeClass('error');
  
      // nome
      const name = nameInput.val().trim();
      if (name === '') {
        $('#name-error').text('PLEASE, ENTER YOUR NAME');
        nameInput.addClass('error');
        return;
      }
  
      // e-mail
      const email = emailInput.val();
      if (!validateEmail(email)) {
        $('#email-error').text('INVALID EMAIL');
        emailInput.addClass('error');
        return;
      }
  
      // senha
      const password = passwordInput.val();
      if (password === '') {
        $('#password-error').text('ENTER A PASSWORD');
        passwordInput.addClass('error');
        return;
      }
  
      // confirmação de senha
      const confirmPassword = confirmPasswordInput.val();
      if (confirmPassword !== password) {
        $('#confirmPassword-error').text('PASSWORDS DO NOT MATCH');
        confirmPasswordInput.addClass('error');
        return;
      }
      window.location.replace('../home/home-sign.html');
    }
    $('.btn-green').on('click', function() {
      validateForm();
    });
  });