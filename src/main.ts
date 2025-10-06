const header = document.querySelector('.header')!;
const headerButton = header.querySelector('.header__button-burger')!;
headerButton.addEventListener('click', (event) => {
  header.classList.toggle('header_open');
});
