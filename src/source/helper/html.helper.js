import { formatNumber } from './function.helper';
import { svg, select } from 'd3';
/**
 * @description createCard function creates a separate card to display country's details
 * @param {object} country
 * @param {HTMLElement} body
 * @returns {HTMLCollection} body argument as an html collection
 */
export function createCard(country, body) {
	const img = document.createElement('img');
	img.setAttribute('class', 'card__image');
	img.width = 100;
	img.src = country.flag;

	const details = document.createElement('ul');
	details.setAttribute('class', 'card__details');
	Object.keys(country.details).forEach((key) => {
		const li = document.createElement('li');
		li.setAttribute('class', 'card__item');

		if (key === 'population') {
			li.textContent = `${key}: ${formatNumber(country.details.population)}`;
		} else if (key === 'area') {
			li.textContent = `${key}: ${formatNumber(country.details.area)} km²`;
		} else if (key === 'name') {
			li.textContent = `${country.details[key]}`;
		} else {
			li.textContent = `${key}: ${country.details[key]}`;
		}

		details.append(li);
	});

	body.append(img);
	body.append(details);
	return body;
}

export function CreateCountryHTML({ flag, name }, width) {
	// img and container
	const container = document.createElement('div');
	const img = document.createElement('img');
	img.src = flag;
	img.width = width;
	container.classList.add('country__container');
	img.classList.add('country__image');

	// bottom line
	const bottomLine = document.createElement('div');
	bottomLine.classList.add('country__bottomLine');

	// name
	const title = document.createElement('p');
	title.classList.add('country__title');
	title.textContent = name;

	//  star
	const star = document.createElement('svg');
	svg// append to bottom line

	// region
	.container
		.append(img);
	container.append(bottomLine);

	return container;
}
