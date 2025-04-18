import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const anchorBtns = document.querySelectorAll('[data-anchor]');
const anchorContents = document.querySelectorAll('[data-anchor-section]');

const getSection = (nameSection) => {
  return [...anchorContents].filter(section => section.getAttribute('data-anchor-section') === nameSection);
}

const scrollToSection = (name) => {
  const el = getSection(name)[0];

  if (el) {
    const offset = el.offsetTop - (window.innerHeight - el.offsetHeight) / 2;

    gsap.to(window, { duration: 1.2, scrollTo: offset });
  }
}

const setActiveAnchor = (name) => {
  anchorBtns.forEach(btn => {
    const isActive = btn.getAttribute('data-anchor') === name;

    btn.classList.toggle('is-active', isActive);
  });
}

if (anchorBtns.length && anchorContents.length) {

  anchorBtns.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      const anchorName = target.getAttribute('data-anchor');

      scrollToSection(anchorName);
      setActiveAnchor(anchorName);
    })
  })

  anchorContents.forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          const nameSection = self?.trigger?.getAttribute('data-anchor-section') || '';

          setActiveAnchor(nameSection);
        }
      },
    });
  })
}
