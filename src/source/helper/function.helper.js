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
 * this function is dedicated to format large numbers related to country's area and population
 * @param {number} number take a number
 * @returns {string} that instead of zeros will display million or thousand
 */
export function formatNumber(number) {
	let res = null;
	if (number > 1000000000) {
		res = `more than ${Math.round(number / 1000000000)} billion`;
	} else if (number > 1000000) {
		res = `${Math.round(number / 1000000)} million`;
	} else {
		let num = Math.round(number / 1000);
		if (num <= 1000) {
			res = `about one thousand`;
		}
		res = `${Math.round(number / 1000)} thousand`;
	}
	return res;
}

/**
 * takes the country's name from the map, turns it into a proper name for searching
 * @param {string} selected
 * @returns {string} which corresponds to the API requirements
 */
export function matchName(selected) {
	let res = '';
	if (selected === 'dem. rep. congo') {
		res = 'DR Congo';
	} else if (selected === 'central african rep.') {
		res = 'Central African Republic';
	} else {
		res = selected;
	}

	return res;
}
