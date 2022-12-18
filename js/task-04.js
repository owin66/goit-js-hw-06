const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const counterDecrement = document.querySelector('[data-action="decrement"]');
const counterIncrement = document.querySelector('[data-action="increment"]');

counterValue.textContent = 0;
const handleIncrement = event => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const handleDecrement = event => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};
counterDecrement.addEventListener('click', handleDecrement);
counterIncrement.addEventListener('click', handleIncrement);
