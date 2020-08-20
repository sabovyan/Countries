/**
 * @type {class}
 * @returns {object} with basic information about country
 */
export class Country {
	constructor(name, alpha3Code, flag, population, area, capital, language) {
		this.flag = flag;
		this.alpha3Code = alpha3Code;
		this.details = {
			name,
			population,
			area,
			capital,
			language,
		};
	}
}
