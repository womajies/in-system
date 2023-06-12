// smooth scrolling
const anchors = document.querySelectorAll('a[href*="#"]');
const sections = document.querySelectorAll('main > section');
const menuLinks = document.querySelectorAll('.header__menu-link');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

window.addEventListener('scroll', (evt) => {
  let currentPos = window.scrollY;
  sections.forEach((section) => {
    let top = section.offsetTop - 100;
    let bottom = top + section.offsetHeight - 100;
    if (currentPos >= top && currentPos <= bottom) {
      menuLinks.forEach((menuLink) => {
        menuLink.classList.remove('header__menu-link--active');
      });
      sections.forEach((el) => {
        el.classList.remove('header__menu-link--active');
      });
      section.classList.add('header__menu-link--active');
      document.querySelector('.header__menu-link[href="#' + section.getAttribute('id') + '"]').classList.add('header__menu-link--active');
    }
  });
});
