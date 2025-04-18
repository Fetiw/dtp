import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeLineFn } from './constants.js';

gsap.registerPlugin(ScrollTrigger);

const blockHowPayment = document.querySelector('[data-block-animation="how-payment"]');

if (blockHowPayment) {
  const label = blockHowPayment.querySelector('.label-sticky');
  const items = blockHowPayment.querySelectorAll('.item-hover');

  const tl = timeLineFn(blockHowPayment);

  tl.from(label, {
    opacity: 0,
    x: -50,
    rotate: 0,
    duration: 1.2,
    ease: 'power2.out',
  });

  tl.from(items, {
    opacity: 0,
    y: 30,
    scale: .9,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out',
  }, '-=.6');
}
