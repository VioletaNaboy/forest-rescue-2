import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slidesImages from '../data/gallery.json' assert { type: 'json' };
import reviews from '../data/reviews.json' assert { type: 'json' };

const wrapper = document.querySelector('.reviews-list__desktop');
createReviewsItems(wrapper, reviews);

function createImageSlides(wrapper, slides) {
  slides.forEach(slide => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'swiper-slide swiper-slide__gallery';
    const img = document.createElement('img');
    img.className = 'slide__img';
    img.src = slide.src;
    img.alt = slide.alt;

    slideDiv.appendChild(img);
    wrapper.appendChild(slideDiv);
  });
}

function createReviewsItems(wrapper, slides) {
  slides.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = `swiper-slide swiper-slide__reviews reviews-li reviews-li-${index}`;

    const box = document.createElement('div');
    box.className = 'reviews-box';

    const description = document.createElement('p');
    description.textContent = item.description;
    description.className = 'reviews-description';

    const divUser = document.createElement('div');
    divUser.className = 'reviews-user';

    const avatarBox = document.createElement('div');
    avatarBox.className = 'reviews-avatar__box';

    const avatar = document.createElement('img');
    avatar.className = 'reviews-avatar';
    avatar.src = item.urlAvatar;
    avatar.alt = item.altAvatar;

    const name = document.createElement('p');
    name.textContent = item.name;

    avatarBox.appendChild(avatar);
    divUser.appendChild(avatarBox);
    divUser.appendChild(name);

    box.appendChild(description);
    box.appendChild(divUser);

    li.appendChild(box);
    wrapper.appendChild(li);
  });
}

function initializeSwiper(containerSelector, slides, createSlidesFunc) {
  const swiperContainer = document.querySelector(containerSelector);
  const wrapper = swiperContainer.querySelector('.swiper-wrapper');

  createSlidesFunc(wrapper, slides);

  const swiper = new Swiper(containerSelector, {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1.1,
    spaceBetween: 8,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 69,
      },
    },
  });

  window.addEventListener('resize', () => {
    swiper.update();
  });

  return swiper;
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper('.swiper1', slidesImages, createImageSlides);
  initializeSwiper('.swiper2', reviews, createReviewsItems);
});
