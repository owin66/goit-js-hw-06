const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const makeIngridients = options => {
  return options.map(option => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = option;
    return liEl;
  });
};

const elements = makeIngridients(ingredients);

ingredientsList.append(...elements);
