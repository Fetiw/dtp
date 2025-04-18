import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const lineItems = document.querySelectorAll('[data-line]');

if (lineItems.length) {
  lineItems.forEach(lineItem => {
    addLineItem(lineItem)
  })

  function addLineItem(lineItem) {
    const position = lineItem.getAttribute('data-line');
    const svg = lineItem.querySelector('svg path');
    const label = lineItem.querySelector('.dot');

    const startPoint =  svg.getPointAtLength(0);
    const pathLength = svg.getTotalLength()
    const endPoint =  svg.getPointAtLength(pathLength);

    if (position === 'start') {
      gsap.set(label, { x: startPoint.x, y: startPoint.y })
    }

    if (position === 'end') {
      gsap.set(label, { x: endPoint.x, y: endPoint.y })
    }

    // gsap.to(label, {
    //   motionPath: {
    //     path: svg,
    //     align: svg,
    //     alignOrigin: [0.5, 0.5],
    //   },
    //   ease: 'none',
    // });
  }
}
