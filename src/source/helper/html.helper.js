import { formatNumber } from './function.helper';
import { select } from 'd3';

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

export function CreateCountryHTML({ flag, name, region }, width) {
	// img and container
	const container = document.createElement('div');
	container.classList.add('country__container');

	const img = document.createElement('img');
	img.classList.add('country__image');
	img.width = width;
	img.src = flag;

	// bottom line
	const bottomLine = document.createElement('div');
	bottomLine.classList.add('country__bottomLine');

	// name
	const title = document.createElement('p');
	title.classList.add('country__title');
	title.textContent = name;

	// region
	const reg = document.createElement('p');
	reg.classList.add('country__region');
	reg.textContent = region;

	// append to bottom line
	// append star
	select(bottomLine)
		.append('svg')
		.attr('width', '20')
		.attr('viewBox', '0 0 90 100')
		.attr('x', '0px')
		.attr('y', '0px')
		.attr('class', 'country__star')
		.append('polygon')
		.attr('class', 'country__star-polygon')
		.attr('fill-rule', 'nonezero')
		.attr('points', '50,0 21,90 98,35 2,35 79,90')
		.append('title')
		.text('Add to your favorites');

	bottomLine.append(title);

	bottomLine.append(reg);

	// append all
	container.append(img);
	container.append(bottomLine);

	return container;
}
