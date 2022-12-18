const input = document.querySelector('#validation-input');
const inputLength = parseInt(input.getAttribute('data-length'));

const blurInputHandler = event => {
  const data = event.currentTarget.value;
  data.length > inputLength || data.length === inputLength
    ? input.classList.replace('invalid', 'valid')
    : input.classList.add('invalid');
};

input.addEventListener('blur', blurInputHandler);
