const header = document.querySelector('.header');

if (header) {
  const scrollThreshold = 20;

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-sticky', window.scrollY > scrollThreshold);
  });
}
