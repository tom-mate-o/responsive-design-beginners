import './app/scss/style.scss';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const main = document.querySelector('#main');
const footer = document.querySelector('#footer');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const menuTopNav = document.querySelector('#menuTopNav');
const overlay = document.querySelector('#overlay');
const breakpoint = window.matchMedia('(width < 43.75em)');

const setupTopNav = () => {
  if (breakpoint.matches) {
    // console.log('is mobile');
    menuTopNav.setAttribute('inert', '');
  } else {
    // console.log('is tablet/desktop');
    menuTopNav.removeAttribute('inert');
  }
};

setupTopNav();

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

breakpoint.addEventListener('change', () => {
  //   console.log('change breakpoint');
  setupTopNav();
});

function openMobileMenu() {
  //   console.log('run open mobile menu');
  btnOpen.setAttribute('aria-expanded', 'true');
  menuTopNav.removeAttribute('inert');
  main.setAttribute('inert', '');
  footer.setAttribute('inert', '');
  menuTopNav.style.transitionDuration = '400ms';
  overlay.style.transitionDuration = '400ms';
  disableBodyScroll(menuTopNav);
  btnClose.focus();
}

function closeMobileMenu() {
  //   console.log('run close mobile menu');
  btnOpen.setAttribute('aria-expanded', 'false');
  menuTopNav.setAttribute('inert', '');
  main.removeAttribute('inert');
  footer.removeAttribute('inert');
  enableBodyScroll(menuTopNav);
  btnOpen.focus();

  setTimeout(() => {
    menuTopNav.removeAttribute('style');
    overlay.removeAttribute('style');
  }, 400);
}

// console.log(breakpoint);
