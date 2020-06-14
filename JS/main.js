'use strict'


const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;



// 스크롤y가 navbarheight보다 내려가면 클래스를 추가 
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarheight) {
        navbar.classList.add('navbar_dark');
    } else {
        navbar.classList.remove('navbar_dark');
    }
});



const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    scrollIntoViews(link);
});


const contentMeBtn = document.querySelector('.home_contact');
contentMeBtn.addEventListener('click', () => {
    scrollIntoViews('#contact');
});




// 해당 창으로 이동시키는 함수
function scrollIntoViews(seletor) {
    const scrollTo = document.querySelector(seletor);
    scrollTo.scrollIntoView({behavior: "smooth"});
}