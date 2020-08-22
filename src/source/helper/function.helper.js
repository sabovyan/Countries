import { menuState } from '../constants/constants';

/**
 *
 * @param {HTMLElement} elem
 * @param {String} removedClass  a class that is going to be removed
 * @param {string} addedClass a class that is going to be added
 * @returns {void}
 * @example
 *  changeState(navToggler, 'nav__toggler--close', 'nav__toggler--open');
 */

export function changeState(elem, removedClass, addedClass) {
	elem.classList.remove(removedClass);
	elem.classList.add(addedClass);
}

/**
 * @description changes the state of the navigation lists from displayed to hide and vice versa
 * @param {HTMLElement} navToggler a button that is responsible for displaying of hiding nav list
 * @param {HTMLElement} navList a list of navigation HTMLElements
 * @returns {void}
 * @example
 * navToggler.addEventListener('click', navToggle.bind(null, navToggler, navList));
 */
export function navToggle(navToggler, navList) {
	if (navToggler.classList.contains('nav__toggler--close')) {
		changeState(navToggler, menuState.toggle.close, menuState.toggle.open);
		changeState(navList, menuState.navList.display, menuState.navList.hide);
	} else {
		changeState(navToggler, menuState.toggle.open, menuState.toggle.close);
		changeState(navList, menuState.navList.hide, menuState.navList.display);
	}
}

/**
 * this function is dedicated to format large numbers related to country's area and population
 * @param {number} number take a number
 * @returns {string} that instead of zeros will display million or thousand
 * @example
 * formatNumber(country.details.population)
 */
export function formatNumber(number) {
	let res = null;
	if (number > 1000000000) {
		res = `more than ${Math.round(number / 1000000000)} billion`;
	} else if (number > 1000000) {
		res = `${Math.round(number / 1000000)} million`;
	} else {
		const num = Math.round(number / 1000);
		if (num <= 1000) {
			res = 'about one thousand';
		}
		res = `${Math.round(number / 1000)} thousand`;
	}
	return res;
}

/**
 * takes the country's name from the map, turns it into a proper name for searching
 * @param {string} selected
 * @returns {string} which corresponds to the API requirements
 * @example
 * let selected = d.properties.name.toLowerCase();
		selected = matchName(selected);
 */
export function matchName(selected) {
	let res = '';
	if (selected === 'dem. rep. congo') {
		res = 'DR Congo';
	} else if (selected === 'central african rep.') {
		res = 'Central African Republic';
	} else if (selected === 'czechia') {
		res = 'Czech Republic';
	} else {
		res = selected;
	}

	return res;
}

/**
 *
 * @param {function} func takes the function that should to be delayed
 * @param {number} wait amount of delay time
 * @returns {function} which takes arguments from cb function and will implement it inside
 * @example
 * const search = debounce(renderTable, 700);
 * searchInput.addEventListener('input', search);
 */

export function debounce(func, wait) {
	let timeout;

	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}
