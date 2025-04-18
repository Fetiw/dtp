import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeLineFn } from './constants.js';

gsap.registerPlugin(ScrollTrigger);

const blockCooperation = document.querySelector('[data-block-animation="cooperation"]');

if (blockCooperation) {
  const header = blockCooperation.querySelector('.section-cooperation__header');
  const cards = blockCooperation.querySelectorAll('.card:not(.card--black)');
  const picture = blockCooperation.querySelector('.picture');
  const cardBlack = blockCooperation.querySelector('.card--black');
  const path = blockCooperation.querySelector('.line path');

  const tl = timeLineFn(blockCooperation);

  tl.from(header, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  });

  tl.from(cards, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out',
  });

  tl.from(path, {
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  tl.from(picture, {
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.5)',
  }, '-=1');

  tl.from(cardBlack, {
    opacity: 0,
    rotate: 0,
    y: 20,
    duration: .5,
    ease: 'power2.out',
  }, '-=.8')
}
