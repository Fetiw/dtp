import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeLineFn } from './constants.js';

gsap.registerPlugin(ScrollTrigger);

const blockFooter = document.querySelector('[data-block-animation="footer"]');

if (blockFooter) {
  const title = blockFooter.querySelector('.h2');

  const tl = timeLineFn(blockFooter);

  tl.from(title, {
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
    onComplete: () => {
      title.classList.add('is-show');
    }
  });
}
