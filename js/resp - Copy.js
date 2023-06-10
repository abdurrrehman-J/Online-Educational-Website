burger = document.querySelector('.burger-1')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
})