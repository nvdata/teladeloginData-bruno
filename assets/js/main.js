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
    // mostra senha


    const botaoMostra = document.querySelectorAll(".show__password .eye");

    function mostraSenha(event) {
        let input = this.nextElementSibling
        let item = this

        input.type = input.type == 'text' ? 'password' : 'text';
        input.type == 'text' ? this.name = "eye-off-outline" : this.name = "eye-outline";

    }

    botaoMostra.forEach((i) => {
        i.addEventListener("click", mostraSenha)
    })


    function validateEmailFinal() {
        const valueEmail = this.value

        function validateEmail() {
            var re = /\S+@\S+\.\S+/;
            return re.test(valueEmail);
        }

        if (validateEmail() == true) {
            this.parentElement.classList.add("email__valido")
            this.parentElement.classList.remove("email__invalido")
        } else if (validateEmail() == false) {
            this.parentElement.classList.add("email__invalido")
            this.parentElement.classList.remove("email__valido")

        }
    }


    const inputsEmail = document.querySelectorAll(".input__email")
    
    inputsEmail.forEach((i) => {
        i.addEventListener("focusout", validateEmailFinal)

    })


}