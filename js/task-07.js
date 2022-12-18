const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const onChangeInputFontSize = event => {
  const fontSize = event.currentTarget.value;
  console.log(fontSize);
  span.style.fontSize = `${fontSize}px`;
};

input.addEventListener('input', onChangeInputFontSize);
