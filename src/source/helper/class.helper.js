/**
 * @type {class}
 * @returns {object} with basic information about country
 */
export class Country {
	constructor(name, numericCode, flag, population, area, capital, language) {
		this.flag = flag;
		this.numericCode = numericCode;
		this.details = {
			name,
			population,
			area,
			capital,
			language,
		};
	}
}
