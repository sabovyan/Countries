import { changeState } from './helper/function.helper';
import { User } from './helper/user.helper';

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

/* SECTION Responsive hamburger menu functionality */
navToggler.addEventListener('click', () => {
  if (navToggler.classList.contains('nav__toggler--close')) {
    changeState(navToggler, menuState.toggle.close, menuState.toggle.open);
    changeState(navList, menuState.navList.display, menuState.navList.hide);
  } else {
    changeState(navToggler, menuState.toggle.open, menuState.toggle.close);
    changeState(navList, menuState.navList.hide, menuState.navList.display);
  }
});

/* SECTION settings for  theme colors */
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

/* SECTION form overlapping */
const formCover = document.querySelector('.forms__overlap');

formCover.addEventListener('click', () => {
  if (formCover.classList.contains('forms__overlap--left')) {
    changeState(formCover, 'forms__overlap--left', 'forms__overlap--right');
  } else {
    changeState(formCover, 'forms__overlap--right', 'forms__overlap--left');
  }
});

/* SECTION switching between 2 forms in  mobile version  */
const formSignIn = document.querySelector('.form__signIn');
const formSignUp = document.querySelector('.form__signUp');

const SignUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signInLink.addEventListener('click', (e) => {
  if (formSignIn.classList.contains('form__display')) {
    changeState(formSignIn, 'form__display', 'form__hide');
    changeState(formSignUp, 'form__hide', 'form__display');
  }
});

SignUpLink.addEventListener('click', (e) => {
  if (formSignUp.classList.contains('form__display')) {
    changeState(formSignUp, 'form__display', 'form__hide');
    changeState(formSignIn, 'form__hide', 'form__display');
  }
});

/* SECTION  login password registration */

const regLogin = document.querySelector('#signUp-login');
const regPassword = document.querySelector('#signUp-password');
const regBtn = document.querySelector('#SignUp-submit');

const users = [];
regBtn.addEventListener('click', (e) => {
  e.preventDefault();

  try {
    if (regLogin.value.trim() === '') {
      /* TODO make an event for form input to return border color to black */
      regLogin.style.borderColor = 'red';
      throw new Error('Your Login should not be empty');
    } else if (regPassword.value.trim().length < 6) {
      throw new Error('Your Login should not be less than 5 characters');
    }

    const user = new User(regLogin.value.trim(), regPassword.value.trim());
    users.push(user);
  } catch (err) {
    alert(err);
  }
});

const SignInBtn = document.querySelector('#SignIn-submit');
