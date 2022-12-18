const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

console.dir(inputEl);

const handleInput = event => {
  spanEl.textContent = event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
};

inputEl.addEventListener('input', handleInput);
