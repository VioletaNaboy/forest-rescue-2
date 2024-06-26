import reviews from '../data/reviews.json';

const wrapper = document.querySelector('.reviews-list__desktop');

function createReviewsItems(wrapper, reviews) {
  reviews.forEach((item, index) => {    

    const li = document.createElement('li');
    li.className = `reviews-li reviews-li-${index}`;

    const box = document.createElement('div');
    box.className = 'reviews-box';

    const description = document.createElement('p');
    description.textContent = item.description;
    description.className = 'reviews-description';

    const divUser = document.createElement('div');
    divUser.className = 'reviews-user';

    const avatarBox = document.createElement('div');
    avatarBox.className = 'reviews-avatar__box';

    const avatar = document.createElement('img');
    avatar.className = 'reviews-avatar';
    avatar.src = item.urlAvatar;
    avatar.alt = item.altAvatar;

    const name = document.createElement('p');
    name.textContent = item.name;

    avatarBox.appendChild(avatar);
    divUser.appendChild(avatarBox);
    divUser.appendChild(name);

    box.appendChild(description);
    box.appendChild(divUser);

    li.appendChild(box);
    wrapper.appendChild(li);
  });
}

createReviewsItems(wrapper, reviews);
