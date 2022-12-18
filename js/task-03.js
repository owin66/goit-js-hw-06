const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryElement = document.querySelector('.gallery');

// const makeImages = options => {
//   return options.map(option => {
//     const imgEl = document.createElement('img');
//     imgEl.classList.add('images-item');
//     imgEl.width = '500';
//     imgEl.height = '500';
//     imgEl.src = option.url;
//     imgEl.alt = option.alt;
//     const liEl = document.createElement('li');

//     liEl.insertAdjacentElement('afterbegin', imgEl);
//     return liEl;
//   });
// };

// galleryElement.style.display = 'flex';

// const elements = makeImages(images);

// galleryElement.append(...elements);

const galleryElement = document.querySelector('.gallery');

const makeImages = ({ url, alt }) => {
  return `
<li class="gallery__item">
  <img class= "gallery__image" src="${url}" alt="${alt}" width= '500' height ='500'>
  </li>`;
};

const gallery = images.map(makeImages).join('');
galleryElement.insertAdjacentHTML('afterbegin', gallery);
