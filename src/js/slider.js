import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slidesImages from '../data/slides.json' assert { type: 'json' };

const swiperWrapper = document.querySelector('.swiper-wrapper');

function createImageSlides(container, slides) {
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

function initializeSwiper(slidesConteiner, slides, createSlidesFunc) {
  const slidesWrapper = document.querySelector(
    `${slidesConteiner} .swiper-wrapper`
  );

  createSlidesFunc(slidesConteiner, slides);

  return new Swiper(slidesConteiner, {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 16,
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 69,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper('.swiper1', slidesImages, createImageSlides);
});
