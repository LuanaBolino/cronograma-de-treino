//MENU DE NAVEGAÇÃO---------------------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", () => nav.classList.toggle("active"));

//LINKS---------------------------------------------------------------------------
document.getElementById('start-btn').addEventListener('click', function () {
    window.location.href = './app/login.html';
});

document.getElementById('login-btn').addEventListener('click', function () {
    window.location.href = './app/login.html';
});

document.getElementById('sign-up-btn').addEventListener('click', function () {
    window.location.href = './app/sign.html';
});