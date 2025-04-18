import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeLineFn } from './constants.js';

gsap.registerPlugin(ScrollTrigger);

const blockCards = document.querySelectorAll('[data-block-animation="trust"]');

if (blockCards) {
  blockCards.forEach(blockCard => initBlockAnimation(blockCard))

  function initBlockAnimation(blockCard) {
    const title = blockCard.querySelector('.h2');
    const cards = blockCard.querySelectorAll('.card');
    const itemsSvg = blockCard.querySelectorAll('.icon-blessing path');

    const tl = timeLineFn(blockCard);

    if (title) {
      tl.from(title, {
        opacity: 0,
        y: 30,
        duration: .8,
        ease: 'power2.out',
        onComplete: () => {
          title.classList.add('is-show');
        }
      });
    }

    tl.from(cards, {
      opacity: 0,
      rotate: 0,
      scale: 1,
      y: 30,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power2.out',
    }, title ? '-=.6' : 0)

    if (itemsSvg) {
      tl.from(itemsSvg, {
        opacity: 0,
        scale: .6,
        duration: 0.7,
        stagger: 0.15,
        reversed: true,
        ease: 'power2.out',
      });
    }
  }
}
