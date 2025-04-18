import { gsap } from 'gsap';

export function timeLineFn(scrollEl) {
  const startScroll =
    window.innerWidth > 992 ? 'top+=20% center+=20%' : 'top+=100px center+=20%';

  return gsap.timeline({
    scrollTrigger: {
      trigger: scrollEl,
      start: startScroll,
      toggleActions: 'play none none none',
      markers: false
    },
  });
}
