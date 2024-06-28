document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const defaultActiveLink = document.querySelector('.nav-link[href="/#hero"]'); 

  function updateActiveNavLink() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });

    if (!current && defaultActiveLink) {
      defaultActiveLink.classList.add('active');
    }
  }

  updateActiveNavLink();
  window.addEventListener('scroll', updateActiveNavLink);

  window.updateActiveNavLink = updateActiveNavLink;
});
