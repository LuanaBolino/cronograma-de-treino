$(document).ready(function () {
    // hamburger
    $(".hamburger").click(function () {
      $(".nav").toggleClass("active");
    });

    // Redirecionamento ao clicar nos botões
    $('#start-btn, #login-btn, #sign-up-btn').click(function () {
      var buttonId = $(this).attr('id');
      switch (buttonId) {
        case 'start-btn':
        case 'login-btn':
          window.location.href = '/app/pages/access/login.html';
          break;
        case 'sign-up-btn':
          window.location.href = '/app/pages/access/sign.html';
          break;
        default:
          break;
      }
    });
  });




