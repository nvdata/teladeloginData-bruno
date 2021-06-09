/*
// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
// import linkDentroLink from './modules/a-dentro-a.js'; //js do menu
// import initAccordion from "./modules/accordion.js"

import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
import * as config from './assets/js/modules/modules/swiper__props.js'; //Configs do Swiper


// linkDentroLink()
// linkDentroLink()
menu();

*/

import Dom from './modules/constructors.js'; //selecionar elementos

const mediaQuebra = window.matchMedia('(max-width: 1024px)').matches

// ★ PAGES ★ 
const pageLogin = new Dom().el("#page__login");


if (pageLogin) { // ★ HOME 
    new Dom().bodyClass("body__login");
   

}


