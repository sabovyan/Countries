/**
 * @type {class}
 * @returns {object} with basic information about country
 * @example
 * 	state.country = new Country(
			countryData[0].name,
			countryData[0].alpha3Code,
			countryData[0].flag,
			countryData[0].population,
			countryData[0].area,
			countryData[0].capital,
			countryData[0].languages[0].nativeName
		);
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
