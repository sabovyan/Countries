import 'babel-polyfill';
import { REST_URL, state, menuState } from './constants/constants';
import { Country } from './helper/class.helper';
import { doGet } from './helper/request.helper';
import { createCard } from './helper/html.helper';
import { changeState } from './helper/function.helper';

const navList = document.querySelector('.l-nav__list-container');
const navToggler = document.querySelector('.nav__toggler');

navToggler.addEventListener('click', () => {
	if (navToggler.classList.contains('nav__toggler--close')) {
		changeState(navToggler, menuState.toggle.close, menuState.toggle.open);
		changeState(navList, menuState.navList.display, menuState.navList.hide);
	} else {
		changeState(navToggler, menuState.toggle.open, menuState.toggle.close);
		changeState(navList, menuState.navList.hide, menuState.navList.display);
	}
});

// console.log(favoriteCountries);
const faveMain = document.querySelector('.favorites__main');
const fn = async () => {
	faveMain.innerHTML = '';
	state.favCountries.forEach(async (code) => {
		const faveCountry = await doGet(`${REST_URL.byCode}${code}`);

		// console.log(country);
	});
};
fn();
