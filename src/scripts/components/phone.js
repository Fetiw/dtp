const items = document.querySelectorAll('.item-phone');

if (items.length) {
  items.forEach((item) => init(item))
}

function init(elem) {
  const toggleBtn = elem.querySelector('.item-phone__header');

  toggleBtn.addEventListener('click', () => {
    const isOpened = elem.classList.contains('is-opened');

    elem.classList.toggle('is-opened', !isOpened);
  });
}

function closeAllItems() {
  items.forEach((item) => item.classList.remove('is-opened'));
}

document.addEventListener('click', (event) => {
  if (document.querySelector('.item-phone.is-opened') && !event.target.closest('.item-phone')) {
    closeAllItems();
  }
});

