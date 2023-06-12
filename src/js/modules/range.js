document.querySelectorAll('.range').forEach(rangeItem => {
  const rangeInput = rangeItem.querySelector('.range__field');
  const rangeValue = rangeItem.querySelector('.range__info-value');

  rangeInput.addEventListener('input', (evt) => {
    rangeValue.textContent = evt.target.value + ' %';
  });
});
