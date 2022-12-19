// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на
//  button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanTextColor: document.querySelector('.color'),
  changeColor: document.querySelector('.change-color'),
};

const onButtonColor = event => {
  const randomColor = getRandomHexColor();
  refs.changeColor.style.backgroundColor = randomColor;
  const spanTxt = refs.changeColor.style.backgroundColor;
  refs.spanTextColor.textContent = `${spanTxt}`;
};

refs.changeColor.addEventListener('click', onButtonColor);
