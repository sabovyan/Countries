const navList = document.querySelector('.l-nav__list-container');
const navToggler = document.querySelector('.nav__toggler');

navToggler.addEventListener('click', () => {
  if (navToggler.classList.contains('nav__toggler--close')) {
    navToggler.classList.remove('nav__toggler--close');
    navToggler.classList.add('nav__toggler--open');

    navList.classList.remove('nav__list-container--display');
    navList.classList.add('nav__list-container--hide');
  } else {
    navToggler.classList.remove('nav__toggler--open');
    navToggler.classList.add('nav__toggler--close');

    navList.classList.remove('nav__list-container--hide');
    navList.classList.add('nav__list-container--display');
  }
  if (navList.style.display === 'flex') {
  } else {
  }
});
