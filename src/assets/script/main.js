import { changeState } from './helper/function.helper';
import { menuState, themeState } from './helper/constants';

const themeIndicator = document.querySelector('.nav__theme');
const themeSlider = document.querySelector('.nav__theme-slider');
const navTheme = document.querySelector('.nav__theme');
const navLogo = document.querySelector('.nav__logo');

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
  localStorage.setItem('textColor', themeState.bgColor);

  document.documentElement.style.setProperty('--bg-color', themeState.txtColor);

  localStorage.setItem('bgColor', themeState.txtColor);

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
const users = {};

regBtn.addEventListener('click', (e) => {
  e.preventDefault();

  try {
    if (regLogin.value.trim() === '') {
      /* TODO make an event for form input to return border color to black */
      regLogin.style.borderColor = 'red';
      throw new Error('Your Login should not be empty');
    } else if (localStorage.getItem(regLogin.value.trim())) {
      throw new Error('this name is already is in use');
    } else if (regPassword.value.trim().length < 6) {
      throw new Error('Your password should not be less than 5 characters');
    }
    let login = regLogin.value.trim();
    let password = regPassword.value;
    users[login] = password;
    localStorage.setItem('users', JSON.stringify(users));
    let registered = confirm(
      'well done! Now please go to sign in to enter your acount'
    );
    if (registered && formSignUp.classList.contains('form__display')) {
      changeState(formSignUp, 'form__display', 'form__hide');
      changeState(formSignIn, 'form__hide', 'form__display');
    }

    console.log(localStorage);
  } catch (err) {
    alert(err.message);
    console.dir(err);
  }
});

/* SECTION  login password sign in */
const SignInBtn = document.querySelector('#SignIn-submit');
const SignInLogin = document.querySelector('#SignIn-login');
const SignInPassword = document.querySelector('#SignIn-password');

SignInBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem('users'));
  let login = SignInLogin.value.trim();
  let password = SignInPassword.value;

  try {
    if (login.trim() === '' || password.trim() === '') {
      throw new Error('please fill in the inputs!');
    } else {
      if (!users[login]) {
        throw new Error('there is no user with this name');
      }
      if (users[login] !== password) {
        console.log(users[login]);
        throw new Error('Your Password was incorrect');
      }
    }
    if (users[login] && users[login] === password) {
      window.location.pathname = '/assets/pages/countries.html';
    }
  } catch (err) {
    alert(err.message);
  }
});
