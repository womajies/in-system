document.querySelectorAll('.select').forEach(select => {
  const selectBtn = select.querySelector('.select__btn');
  const selectOptions = select.querySelectorAll('.select__options-item');
  const selectInput = select.querySelector('.select__input');

  function outsideClickHandler(evt) {
    if (evt.target !== selectBtn && evt.target !== selectInput) {
      select.classList.remove('select--active');
      document.removeEventListener('click', outsideClickHandler);
      document.removeEventListener('keydown', escKeydownHandler);
    }
  }

  function escKeydownHandler(evt) {
    if (evt.key === 'Escape') {
      select.classList.remove('select--active');
      document.removeEventListener('click', outsideClickHandler);
      document.removeEventListener('keydown', escKeydownHandler);
    }
  }

  selectBtn.addEventListener('click', () => {
    select.classList.toggle('select--active');

    document.addEventListener('click', outsideClickHandler);
    document.addEventListener('keydown', escKeydownHandler);
  });

  selectInput.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 32) {
      select.classList.toggle('select--active');

      document.addEventListener('click', outsideClickHandler);
      document.addEventListener('keydown', escKeydownHandler);
    }
  });

  selectOptions.forEach(option => {
    option.addEventListener('click', (evt) => {
      evt.stopPropagation();

      selectBtn.innerText = option.innerText;
      selectInput.value = option.dataset.value;
      select.classList.remove('select--active');

      document.removeEventListener('click', outsideClickHandler);
      document.removeEventListener('keydown', escKeydownHandler);
    });
  });
});
