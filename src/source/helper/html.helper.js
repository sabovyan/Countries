/* eslint-disable comma-dangle */
import { select } from 'd3';
import { formatNumber } from './function.helper';

/**
 *
 * @param {string} className class name for image
 * @param {number} width to set default with for image
 * @param {string} src a url for image
 * @returns {HTMLElement} image tag
 */
const createImage = (className, width, src) => {
	const img = document.createElement('img');
	img.setAttribute('class', `${className}`);
	img.width = width;
	img.src = src;
	return img;
};

/**
 * @description createCard function creates a separate card to display country's details
 * @param {object} country
 * @param {HTMLElement} body
 * @returns {HTMLCollection} body argument as an html collection
 */
export function createCard(country, body) {
	const img = createImage('card__image', 100, country.flag);

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
/**
 *
 * @param {object} param0 an object that contains all the information for about country
 * @param {object} param1 the state object that contains favorite countries
 * @returns {HTMLCollection} with all the necessary data about country
 */
export function CreateCountryHTML(
	{ flag, name, region, alpha3Code },
	{ favCountries }
) {
	const container = document.createElement('div');
	container.className = 'country__container';
	const img = createImage('country__image', 30, flag);

	const bottomLine = document.createElement('div');
	bottomLine.classList.add('country__bottomLine');

	const title = document.createElement('p');
	title.classList.add('country__title');
	title.textContent = name;

	const reg = document.createElement('p');
	reg.classList.add('country__region');
	reg.textContent = region;

	select(bottomLine)
		.append('svg')
		.attr('width', '20')
		.attr('viewBox', '0 0 90 100')
		.attr('x', '0px')
		.attr('y', '0px')
		.attr('class', () => {
			if (favCountries.includes(alpha3Code)) {
				return 'country__star country__star--added';
			}
			return 'country__star';
		})
		.append('polygon')
		.attr('class', 'country__star-polygon')
		.attr('fill-rule', 'nonezero')
		.attr('points', '50,0 21,90 98,35 2,35 79,90')
		.append('title')
		.text('Add to your favorites');

	bottomLine.append(title);

	bottomLine.append(reg);

	container.append(img);
	container.append(bottomLine);

	return container;
}

/**
 * @type {object} options for animations
 */
const appearOptions = {
	threshold: 0,
	rootMargin: '0px 0px -125px 0px',
};

export const appearOnScroll = new IntersectionObserver(
	(entries, appearOnScroll) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		});
	},
	appearOptions
);
