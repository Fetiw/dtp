import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeLineFn } from './constants.js';

gsap.registerPlugin(ScrollTrigger);

const blockReceive = document.querySelector('[data-block-animation="receive"]');

if (blockReceive) {
  const title = blockReceive.querySelector('.h2');
  const card = blockReceive.querySelector('.card-rule');
  const cardAction = blockReceive.querySelector('.card-rule__action');
  const cardSlider = blockReceive.querySelector('.card-percent');
  const itemsSvg = cardSlider.querySelectorAll('.card-percent__picture path');

  const tl = timeLineFn(blockReceive);

  tl.from(title, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power2.out',
    onComplete: () => {
      title.classList.add('is-show');
    }
  });

  tl.from(card, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power2.out',
  }, '-=.7');

  tl.from(cardSlider, {
    opacity: 0,
    rotate: 0,
    y: 50,
    duration: 1.2,
    ease: 'power2.out',
  });

  tl.from(itemsSvg, {
    opacity: 0,
    scale: .6,
    duration: 0.7,
    stagger: 0.15,
    reversed: true,
    ease: 'power2.out',
  });

  tl.from(cardAction, {
    opacity: 0,
    rotate: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  }, '-=.8');
}
