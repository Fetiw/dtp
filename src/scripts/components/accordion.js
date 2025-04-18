const accordions = document.querySelectorAll(`[data-accordion-items]`);

accordions.forEach((accordion) => {
  const accordionItems = accordion.querySelectorAll('[data-accordion-item]');
  let activeItem = null;

  accordionItems.forEach((item) => {
    const btn = item.querySelector('[data-accordion-btn]');

    btn.addEventListener('click', () => {
      if (activeItem && activeItem !== item) {
        activeItem.classList.remove('is-active');
      }

      item.classList.toggle('is-active');
      activeItem = item.classList.contains('is-active') ? item : null;
    });
  });
});
