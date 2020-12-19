const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.nav-button');

const hamburger = './img/icon-hamburger.svg';
const close = './img/icon-close.svg';
let toggleBtn = document.getElementById('navBtn');
let state = false;

navBtn.addEventListener('click', () => {
    navMobile.classList.toggle('show');
    if (state) {
        toggleBtn.src = hamburger;
        state = false;
    } else {
        toggleBtn.src = close;
        state = true;
    }
});
