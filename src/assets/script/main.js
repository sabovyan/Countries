import { changeState } from './helper/function.helper';

const navList = document.querySelector('.l-nav__list-container');
const navToggler = document.querySelector('.nav__toggler');

const themeIndicator = document.querySelector('.nav__theme');
const themeSlider = document.querySelector('.nav__theme-slider');
const navTheme = document.querySelector('.nav__theme');
const navLogo = document.querySelector('.nav__logo');

const menuState = {
  toggle: {
    close: 'nav__toggler--close',
    open: 'nav__toggler--open',
  },

  navList: {
    display: 'nav__list-container--display',
    hide: 'nav__list-container--hide',
  },
};

const themeState = {
  theme: {
    light: 'nav__theme--light',
    dark: 'nav__theme--dark',
  },

  slider: {
    light: 'nav__theme-slider--light',
    dark: 'nav__theme-slider--dark',
  },

  logo: {
    light: 'nav__logo--light',
    dark: 'nav__logo--dark',
  },
};

navToggler.addEventListener('click', () => {
  if (navToggler.classList.contains('nav__toggler--close')) {
    changeState(navToggler, menuState.toggle.close, menuState.toggle.open);
    changeState(navList, menuState.navList.display, menuState.navList.hide);
  } else {
    changeState(navToggler, menuState.toggle.open, menuState.toggle.close);
    changeState(navList, menuState.navList.hide, menuState.navList.display);
  }
});

navTheme.addEventListener('click', () => {
  themeState.bgColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--bg-color');

  themeState.txtColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--text-color');

  document.documentElement.style.setProperty(
    '--text-color',
    themeState.bgColor
  );
  document.documentElement.style.setProperty('--bg-color', themeState.txtColor);

  if (themeSlider.classList.contains('nav__theme-slider--light')) {
    changeState(themeIndicator, themeState.theme.light, themeState.theme.dark);

    changeState(themeSlider, themeState.slider.light, themeState.slider.dark);

    changeState(navLogo, themeState.logo.light, themeState.logo.dark);
  } else {
    changeState(themeIndicator, themeState.theme.dark, themeState.theme.light);

    changeState(themeSlider, themeState.slider.dark, themeState.slider.light);

    changeState(navLogo, themeState.logo.dark, themeState.logo.light);
  }
});
