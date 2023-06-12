const form = document.querySelector('.order__form');
const emailInput = form.querySelector('input[name="email"]');
const nameInput = form.querySelector('input[name="name"]');
const selects = form.querySelectorAll('.select');
const fileChooser = form.querySelector('#input-file');
const fileInput = form.querySelector('.order__form-file');
const fileValue = fileInput.querySelector('.input-value');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];

  fileInput.classList.add('input--attached');
  fileValue.textContent = file.name.toLowerCase();
});

form.addEventListener('submit', (evt) => {
  selects.forEach((el) => {
    const selectInput = el.querySelector('.select__input');
    const selectErrorElem = el.querySelector('.select__error');

    if (!selectInput.checkValidity()) {
      selectErrorElem.textContent = 'Выберите тип системы!';
      selectErrorElem.style.display = 'block';
      evt.preventDefault();
    } else {
      selectErrorElem.textContent = '';
      selectErrorElem.style.display = 'none';
    }
  });

  if (!emailInput.checkValidity()) {
    emailInput.nextElementSibling.textContent = 'Введите корректный email!';
    emailInput.nextElementSibling.style.display = 'block';
    emailInput.focus();
    evt.preventDefault();
  } else {
    emailInput.nextElementSibling.textContent = '';
    emailInput.nextElementSibling.style.display = 'none';
  }

  if (!nameInput.checkValidity()) {
    nameInput.nextElementSibling.textContent = 'Введите имя!';
    nameInput.nextElementSibling.style.display = 'block';
    nameInput.focus();
    evt.preventDefault();
  } else {
    nameInput.nextElementSibling.textContent = '';
    nameInput.nextElementSibling.style.display = 'none';
  }
});
