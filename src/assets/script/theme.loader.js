import { changeState } from './helper/function.helper';

const themeIndicator = document.querySelector('.nav__theme');
const themeSlider = document.querySelector('.nav__theme-slider');
const navTheme = document.querySelector('.nav__theme');
const navLogo = document.querySelector('.nav__logo');
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

const changeThemeState = () => {
  let textColor = localStorage.getItem('textColor');
  let bgColor = localStorage.getItem('bgColor');
  document.documentElement.style.setProperty('--text-color', textColor);
  document.documentElement.style.setProperty('--bg-color', bgColor);

  if (textColor.trim() === '#343434') {
    changeState(themeIndicator, themeState.theme.dark, themeState.theme.light);

    changeState(themeSlider, themeState.slider.dark, themeState.slider.light);

    changeState(navLogo, themeState.logo.dark, themeState.logo.light);
  } else {
    changeState(themeIndicator, themeState.theme.light, themeState.theme.dark);

    changeState(themeSlider, themeState.slider.light, themeState.slider.dark);

    changeState(navLogo, themeState.logo.light, themeState.logo.dark);
  }
};
changeThemeState();
