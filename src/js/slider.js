import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slides from '../data/slides.json' assert { type: 'json' };

const swiperWrapper = document.querySelector('.swiper-wrapper');

function createSlides(slides) {
  slides.forEach(slide => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'swiper-slide';
    const img = document.createElement('img');
    img.className = 'slide__img';
    img.src = slide.src;
    img.alt = slide.alt;

    slideDiv.appendChild(img);
    swiperWrapper.appendChild(slideDiv);
  });
}

createSlides(slides);

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 4,  
  spaceBetween: 69,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
