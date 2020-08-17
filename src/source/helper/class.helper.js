/**
 * @type {class}
 * @returns {object} with basic information about country
 */
export class Country {
	constructor(name, flag, population, area, capital, language) {
		this.flag = flag;
		this.details = {
			name,
			population,
			area,
			capital,
			language,
		};
		// this.details.population = population;
		// this.details.area = area;
		// this.details.capital = capital;
		// this.details.language = language;
	}
}
