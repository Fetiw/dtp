import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const swiperItems = document.querySelectorAll('.swiper');

if (swiperItems.length) {
  swiperItems.forEach((swiperElement) => {
    initSwiper(swiperElement);
  })
}

function initSwiper(swiperElement) {
  const pagination = swiperElement.querySelector('.swiper-pagination');

  new Swiper(swiperElement, {
    modules: [Pagination, EffectFade, Autoplay],
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    disableOnInteraction: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    grabCursor: true,
    pagination: {
      el: pagination,
      clickable: true,
    }
  });
}
