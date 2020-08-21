import { changeState } from './helper/function.helper';

const formCover = document.querySelector('.forms__overlap');
const formSignIn = document.querySelector('.form__signIn');
const formSignUp = document.querySelector('.form__signUp');

const SignUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

const regLogin = document.querySelector('#signUp-login');
const regPassword = document.querySelector('#signUp-password');
const regBtn = document.querySelector('#SignUp-submit');

const SignInBtn = document.querySelector('#SignIn-submit');
const SignInLogin = document.querySelector('#SignIn-login');
const SignInPassword = document.querySelector('#SignIn-password');

function changeCoverPosition() {
	if (formCover.classList.contains('forms__overlap--left')) {
		changeState(formCover, 'forms__overlap--left', 'forms__overlap--right');
	} else {
		changeState(formCover, 'forms__overlap--right', 'forms__overlap--left');
	}
}

/* SECTION form overlapping */
formCover.addEventListener('click', () => {
	changeCoverPosition();
});

/* SECTION switching between 2 forms in  mobile version  */
signInLink.addEventListener('click', () => {
	if (formSignIn.classList.contains('form__display')) {
		changeState(formSignIn, 'form__display', 'form__hide');
		changeState(formSignUp, 'form__hide', 'form__display');
	}
});

SignUpLink.addEventListener('click', () => {
	if (formSignUp.classList.contains('form__display')) {
		changeState(formSignUp, 'form__display', 'form__hide');
		changeState(formSignIn, 'form__hide', 'form__display');
	}
});

/* SECTION  login password registration */
regBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const storage = window.localStorage;
	const storedUsers = JSON.parse(storage.getItem('users'));
	try {
		const users = {};
		if (regLogin.value.trim() === '') {
			throw new Error('Your Login should not be empty');
		} else if (regLogin.value.trim().length < 5) {
			throw new Error('Your Login should not be less than 5 characters');
		} else if (storedUsers[regLogin.value.trim()]) {
			throw new Error('this name is already in use');
		} else if (regPassword.value.trim().length < 5) {
			throw new Error('Your password should not be less than 5 characters');
		} else {
			const login = regLogin.value.trim();
			const password = regPassword.value;
			users[login] = password;
			localStorage.setItem('users', JSON.stringify(users));
		}

		// eslint-disable-next-line no-alert
		const registered = confirm(
			'well done! Now please go to sign in to enter your account'
		);
		if (registered && formSignUp.classList.contains('form__display')) {
			changeState(formSignUp, 'form__display', 'form__hide');
			changeState(formSignIn, 'form__hide', 'form__display');
		}
		changeCoverPosition();
		SignInLogin.focus();
		regLogin.value = '';
		regPassword.value = '';
	} catch (err) {
		// eslint-disable-next-line no-alert
		alert(err.message);
	}
});

/* SECTION  login */
SignInBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const users = JSON.parse(localStorage.getItem('users'));
	const login = SignInLogin.value.trim();
	const password = SignInPassword.value;

	try {
		if (login.trim() === '' || password.trim() === '') {
			throw new Error('please fill in the inputs!');
		} else {
			if (!users) {
				changeCoverPosition();
				regLogin.focus();
				SignInLogin.value = '';
				SignInPassword.value = '';
				throw new Error('there is no user with this name and password');
			}
			if (!users[login]) {
				changeCoverPosition();
				regLogin.focus();
				SignInLogin.value = '';
				SignInPassword.value = '';
				throw new Error('there is no user with this name');
			}
			if (users[login] !== password) {
				throw new Error('Your Password was incorrect');
			}
		}
		if (users[login] && users[login] === password) {
			window.location.pathname = './src/pages/countries.html';
		}
	} catch (err) {
		// eslint-disable-next-line no-alert
		alert(err.message);
	}
});
