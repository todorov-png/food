'use strict';
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', ()=>{
    const modalTimerId = setTimeout( () => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-11-25');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
});






/* fetch('http://localhost:3000/menu')
  .then(data => data.json())
  .then(res => console.log(res));

  fetch('http://localhost:3000/menu', {
      method: "POST",
      body: JSON.stringify({name: 'Alex'}),
      headers: {
        'Content-type': 'aplication/json'
      }
  })
  .then(data => data.json())
  .then(res => console.log(res));


axios.get('http://localhost:3000/menu')
  .then(data => {
      data.data.forEach(({img, altimg, title, descr, price}) => {
        new MenuCard(img, altimg, title, descr, price).render(); 
      });
  }); */