import 'babel-polyfill';
import { REST_URL, state, menuState } from './constants/constants';
import { doGet } from './helper/request.helper';
import { CreateCountryHTML } from './helper/html.helper';
import { changeState } from './helper/function.helper';
import { setFavorite } from './helper/storage.helper';

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

const faveMain = document.querySelector('.favorites__main');
const renderFavorites = async () => {
	faveMain.innerHTML = '';

	const result = await doGet(REST_URL.all);

	result.forEach(
		// eslint-disable-next-line no-return-assign
		(countryData) =>
			(state.countryCode[countryData.name] = countryData.alpha3Code)
	);

	const favorites = state.favCountries.join(';');

	const faveCountries = await doGet(`${REST_URL.byCode}${favorites}`);
	faveCountries.forEach((fav) => {
		const country = CreateCountryHTML(fav, state);
		faveMain.append(country);
	});

	// const countryContainer = document.querySelector('.country__container');
	const starButtons = document.querySelectorAll('.country__star');
	starButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const countryContainer = button.parentElement.parentElement;
			const countryName = button.nextSibling.innerText;
			state.favCountries = setFavorite(
				button,
				'country__star--added',
				state.favCountries,
				state.countryCode[countryName]
			);
			if (!button.classList.contains('country__star--added')) {
				countryContainer.style.display = 'none';
			}
		});
	});
};

renderFavorites();
