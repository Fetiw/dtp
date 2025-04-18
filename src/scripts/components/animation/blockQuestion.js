import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeLineFn } from './constants.js';

gsap.registerPlugin(ScrollTrigger);

const blockQuestion = document.querySelector('[data-block-animation="question"]');

if (blockQuestion) {
  const header = blockQuestion.querySelector('.section-question__header');
  const items = blockQuestion.querySelectorAll('.item-accordion');

  const tl = timeLineFn(blockQuestion);

  tl.from(header, {
    opacity: 0,
    y: 30,
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
