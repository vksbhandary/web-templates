const menuBtn = document.querySelector('.menubutton');
const hamburger = document.querySelectorAll('.menubutton__item');
const nav = document.querySelector('.menu-wraper');
const menuNav = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navbar__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    nav.classList.add('open');
    menuBtn.classList.add('open');
    menuNav.classList.add('open');
    hamburger.forEach(item => item.classList.add('open'));
    navItems.forEach(item => item.classList.add('open'));
    showMenu = true;
  } else {
    nav.classList.remove('open');
    menuBtn.classList.remove('open');
    menuNav.classList.remove('open');
    hamburger.forEach(item => item.classList.remove('open'));
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }
}