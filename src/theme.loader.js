import { changeState } from './helper/function.helper';
import { themeState } from './constants/constants';

const themeIndicator = document.querySelector('.nav__theme');
const themeSlider = document.querySelector('.nav__theme-slider');
const navTheme = document.querySelector('.nav__theme');
const navLogo = document.querySelector('.nav__logo');

function setTheme(state1, state2) {
  changeState(
    themeSlider,
    themeState.slider[state1],
    themeState.slider[state2]
  );

  changeState(
    themeIndicator,
    themeState.theme[state1],
    themeState.theme[state2]
  );

  changeState(navLogo, themeState.logo[state1], themeState.logo[state2]);
}

const changeThemeState = () => {
  const textColor = localStorage.getItem('textColor') || '#efefef';
  const bgColor = localStorage.getItem('bgColor') || '#343434';
  document.documentElement.style.setProperty('--text-color', textColor);
  document.documentElement.style.setProperty('--bg-color', bgColor);

  if (textColor.trim() === '#efefef') {
    changeState(themeSlider, themeState.slider.light, themeState.slider.dark);
    document.addEventListener('DOMContentLoaded', () => {
      themeSlider.style.transition = 'none';
      setTimeout(() => {
        themeSlider.style.transition = 'all 0.4s';
      }, 0);
    });
    setTheme('light', 'dark');
  } else {
    setTheme('dark', 'light');
  }
};
changeThemeState();

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
  localStorage.setItem('textColor', themeState.bgColor);

  document.documentElement.style.setProperty('--bg-color', themeState.txtColor);

  localStorage.setItem('bgColor', themeState.txtColor);

  if (themeSlider.classList.contains('nav__theme-slider--light')) {
    setTheme('light', 'dark');
  } else {
    setTheme('dark', 'light');
  }
});
