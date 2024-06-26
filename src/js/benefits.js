import benefits from '../data/benefits.json' assert { type: 'json' };

function createItems() {
  const list = document.querySelector('.benefits-list');

  benefits.forEach(item => {
    const box = document.createElement('li');
    box.className = 'benefits-content';

    const boxImg = document.createElement('div');
    boxImg.className = 'benefits-box__img';

    const img = document.createElement('img');
    img.className = 'benefits-img';
    img.src = item.src;
    img.alt = item.alt;

    const value = document.createElement('p');
    value.textContent = item.value;
    value.className = 'benefits-value';

    const description = document.createElement('p');
    description.textContent = item.description;
description.className = 'benefits-description';

    boxImg.appendChild(img);
    box.appendChild(boxImg);
    box.appendChild(value);
    box.appendChild(description);

    list.appendChild(box);
  });
};

createItems()
