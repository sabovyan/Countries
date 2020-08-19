import 'babel-polyfill';
import { select, json } from 'd3';
import { feature } from 'topojson';
import { menuState, MAP_URL, REST_URL } from './constants/constants';
import { changeState, matchName } from './helper/function.helper';
import { createCard } from './helper/html.helper';
import { doGet } from './helper/request.helper';
import { getMap } from './helper/map.helper';
import { Country } from './helper/class.helper';
import { setFavorite } from './helper/storage.helper';

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

const cardContext = document.querySelector('.countries__card-inner');
const cardBody = document.querySelector('.card__body');
const countriesCard = document.querySelector('.countries__card');
const cardCloseBtn = document.querySelector('.card__close');
const cardStarBtn = document.querySelector('.card__star');
const state = {
	favCountries: JSON.parse(window.localStorage.getItem('favorites')) || [],
};

const render = async () => {
	const worldMap = await json(MAP_URL);
	const countriesMap = feature(worldMap, worldMap.objects.countries);

	const svg = select('#countriesMap');
	const g = getMap(svg, countriesMap);
	g.on('click', async (d) => {
		cardBody.innerHTML = '';
		let selected = d.properties.name.toLowerCase();

		// TODO delete console log
		console.log(selected);

		selected = matchName(selected);

		const countryData = await doGet(`${REST_URL.byName}${selected}`);

		state.country = new Country(
			countryData[0].name,
			countryData[0].alpha3Code,
			countryData[0].flag,
			countryData[0].population,
			countryData[0].area,
			countryData[0].capital,
			countryData[0].languages[0].nativeName
		);
		createCard(state.country, cardBody);
		if (state.favCountries.includes(state.country.alpha3Code)) {
			cardStarBtn.classList.add('card__start--added');
		}
		countriesCard.style.display = 'flex';
	});
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
