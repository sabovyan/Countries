import 'babel-polyfill';
import { menuState, REST_URL, state } from './constants/constants';
import { changeState } from './helper/function.helper';
import { doGet } from './helper/request.helper';
import { Country } from './helper/class.helper';
import { setFavorite } from './helper/storage.helper';
import { renderMap, renderTable } from './helper/render.helper';

/* SECTION hamburger menu */
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

/* card */
const countriesCard = document.querySelector('.countries__card');
const cardCloseBtn = document.querySelector('.card__close');
const cardStarBtn = document.querySelector('.card__star');

/* navigation */
const countriesNavMap = document.querySelector('.countries__item-map');
const countriesNavTable = document.querySelector('.countries__item-table');
const CountriesNav = [countriesNavMap, countriesNavTable];
const mapSection = document.querySelector('.countries__section-map');
const tableSection = document.querySelector('.countries__section-table');

/* storage */
const storage = window.localStorage;

/* table */
const tableContainer = document.querySelector('.table__container');

function displayMap() {
	tableSection.style.display = 'none';
	mapSection.style.display = 'block';
	countriesNavTable.classList.remove('countries__item--active');
	countriesNavMap.classList.add('countries__item--active');
}

function displayTable() {
	mapSection.style.display = 'none';
	tableSection.style.display = 'block';
	countriesNavMap.classList.remove('countries__item--active');
	countriesNavTable.classList.add('countries__item--active');
}

const render = async () => {
	if (state.countryNav.map === true) {
		displayMap();
		renderMap();
	}
	if (state.countryNav.table === true) {
		displayTable();
		renderTable();
	}
};

render();

const cardStarPolygon = document.querySelector('.card__star-polygon');
countriesCard.addEventListener('click', (e) => {
	if (e.target === countriesCard) {
		cardStarBtn.classList.remove('card__start--added');
		countriesCard.style.display = 'none';
	}
	if (
		e.target === cardCloseBtn ||
		e.target === cardCloseBtn.querySelector('path')
	) {
		cardStarBtn.classList.remove('card__start--added');
		countriesCard.style.display = 'none';
	}

	if (e.target === cardStarBtn || e.target === cardStarPolygon) {
		state.favCountries = setFavorite(cardStarBtn, state, state.country);
	}
});

/* SECTION Countries inner navigation */

CountriesNav.forEach((navItem) => {
	navItem.addEventListener('click', (e) => {
		if (e.target === countriesNavMap) {
			displayMap();
			state.countryNav.map = true;
			state.countryNav.table = false;
			storage.setItem('countryNav', JSON.stringify(state.countryNav));
		}
		if (e.target === countriesNavTable) {
			displayTable();
			state.countryNav.table = true;
			state.countryNav.map = false;
			storage.setItem('countryNav', JSON.stringify(state.countryNav));
		}
		render();
	});
});
