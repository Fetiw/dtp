import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeLineFn } from './constants.js';

gsap.registerPlugin(ScrollTrigger);

const blockWeUnderstand = document.querySelector('[data-block-animation="we-understand"]');

if (blockWeUnderstand) {
  const header = blockWeUnderstand.querySelector('.section-we-understand__header');
  const card = blockWeUnderstand.querySelector('.card');
  const lines = blockWeUnderstand.querySelectorAll('.line');

  const pictures = [];
  const labelContents = [];
  const svgPaths = [];

  lines.forEach(line => {
    const picture = line.querySelector('.picture');
    const labelContent = line.querySelector('.label__content');
    const svgPath = line.querySelector('svg path');

    if (picture) {
      gsap.set(picture, { opacity: 0, y: 30 });
      pictures.push(picture);
    }

    if (labelContent) {
      gsap.set(labelContent, { opacity: 0, y: 30 });
      labelContents.push(labelContent);
    }

    if (svgPath) {
      // const pathLength = svgPath.getTotalLength();

      // gsap.set(svgPath, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
      gsap.set(svgPath, { opacity: 0 });
      svgPaths.push(svgPath);
    }
  });

  const tl = timeLineFn(blockWeUnderstand);

  tl.from(header, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
  });

  tl.from(card, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
  }, '-=.7');

  tl.to(pictures, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
  });

  tl.to(labelContents, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.2,
  }, '-=0.6');

  tl.add(() => animateLines(svgPaths));
}

function animateLines(svgPaths) {
  gsap.to(svgPaths, {
    opacity: 1,
    // strokeDashoffset: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
  });

  // gsap.to(svgPaths, {
  //   strokeDasharray: '4 4',
  //   strokeWidth: 3,
  //   duration: 0.5,
  //   ease: 'power2.out',
  //   stagger: 0.2,
  // }, '-=0.5');
}
