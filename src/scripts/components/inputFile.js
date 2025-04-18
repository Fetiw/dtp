const fileInputs = document.querySelectorAll('.input-file');

if (fileInputs.length) {
  fileInputs.forEach(fileInput => inputFile(fileInput));
}

function inputFile(e) {
  const input = e.querySelector('input');
  const add = e.querySelector('[data-file-add]');
  const remove = e.querySelector('[data-file-remove]');

  const toggleBtn = (val) => {
    add.classList.toggle('is-show', !val);
    remove.classList.toggle('is-show', val);
  }

  input.addEventListener('change', ({ target }) => {
    toggleBtn(target.files.length)
  });

  remove.addEventListener('click', (event) => {
    event.preventDefault();
    input.value = '';
    input.dispatchEvent(new CustomEvent('change'));
  });
}
