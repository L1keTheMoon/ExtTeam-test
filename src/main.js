const header = document.querySelector('.header');
const headerButton = header.querySelector('.header__button-burger');
headerButton.addEventListener('click', () => {
  header.classList.toggle('header_open');
});

new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  }
});

const techButtons = document.querySelectorAll('.technologies__button');
techButtons.forEach(button => {
  button.addEventListener('click', event => {
    techButtons.forEach(b => b.classList.remove('technologies__button_active'));
    event.currentTarget.classList.add('technologies__button_active');
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  event.target?.reset();
});
