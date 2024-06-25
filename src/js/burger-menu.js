const burgerBtn = document.getElementById('burger');
const closeBtn = document.getElementById('close-burger');
const mobileMenu = document.getElementById('mobile-menu');
const links = document.getElementsByClassName('nav-link');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
links.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
