import { Country } from './class.helper';
import { formatNumber } from './function.helper';

export function createCard(json, body) {
	const country = new Country(
		json[0].name,
		json[0].numericCode,
		json[0].flag,
		json[0].population,
		json[0].area,
		json[0].capital,
		json[0].languages[0].nativeName
	);

	const img = document.createElement('img');
	img.setAttribute('class', 'card__image');
	img.width = 100;
	img.src = country.flag;

	const details = document.createElement('ul');
	details.setAttribute('class', 'card__details');
	for (let key of Object.keys(country.details)) {
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
	}

	body.append(img);
	body.append(details);
	return body;
}
