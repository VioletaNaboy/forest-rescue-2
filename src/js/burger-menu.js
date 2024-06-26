const burgerBtn = document.getElementById('burger');
const closeBtn = document.getElementById('close-burger');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');
const links = document.querySelectorAll('.item-mob');

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  backdrop.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

burgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

links.forEach(link => {
  link.addEventListener('click', toggleMenu);
});
