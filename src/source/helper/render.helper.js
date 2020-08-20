import 'babel-polyfill';
import { select, json } from 'd3';
import { feature } from 'topojson';
import { MAP_URL, REST_URL, state } from '../constants/constants';
import { matchName, randomNumber } from './function.helper';
import { createCard, CreateCountryHTML } from './html.helper';
import { doGet } from './request.helper';
import { getMap } from './map.helper';
import { Country } from './class.helper';

const svg = select('#countriesMap');
const countriesCard = document.querySelector('.countries__card');
const cardStarBtn = document.querySelector('.card__star');
const cardBody = document.querySelector('.card__body');
const tableContainer = document.querySelector('.table__container');

export async function renderMap() {
	svg.selectAll('*').remove();
	const worldMap = await json(MAP_URL);
	const countriesMap = feature(worldMap, worldMap.objects.countries);

	const g = getMap(svg, countriesMap);
	g.on('click', async (d) => {
		let selected = d.properties.name.toLowerCase();

		// TODO delete console log
		console.log(selected);

		selected = matchName(selected);

		const countryData = await doGet(`${REST_URL.byName}${selected}`);
		/* TODO create card call function */
		state.country = new Country(
			countryData[0].name,
			countryData[0].alpha3Code,
			countryData[0].flag,
			countryData[0].population,
			countryData[0].area,
			countryData[0].capital,
			countryData[0].languages[0].nativeName
		);
		cardBody.innerHTML = '';
		createCard(state.country, cardBody);
		if (state.favCountries.includes(state.country.alpha3Code)) {
			cardStarBtn.classList.add('card__start--added');
		}
		countriesCard.style.display = 'flex';
	});
}

export async function renderTable() {
	tableContainer.innerHTML = '';
	const restAllCountries = await doGet(REST_URL.all);
	state.quantity = restAllCountries.length;

	console.log(restAllCountries);

	restAllCountries.forEach((country) => {
		const w = randomNumber(3);
		const h = randomNumber(3);
		tableContainer.append(CreateCountryHTML(country));
		tableContainer.style.display = 'grid';
	});
}
