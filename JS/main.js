'use strict'


const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(navbarheight);
    if (window.scrollY > navbarheight) {
        navbar.classList.add('navbar_dark');
    } else {
        navbar.classList.remove('navbar_dark');
    }
});
