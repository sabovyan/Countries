export const menuState = {
	toggle: {
		close: 'nav__toggler--close',
		open: 'nav__toggler--open',
	},

	navList: {
		display: 'nav__list-container--display',
		hide: 'nav__list-container--hide',
	},
};

export const themeState = {
	theme: {
		light: 'nav__theme--light',
		dark: 'nav__theme--dark',
	},

	slider: {
		light: 'nav__theme-slider--light',
		dark: 'nav__theme-slider--dark',
	},

	logo: {
		light: 'nav__logo--light',
		dark: 'nav__logo--dark',
	},
};

export const MAP_URL =
	'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

export const REST_URL = {
	byName: 'https://restcountries.eu/rest/v2/name/',
	all: 'https://restcountries.eu/rest/v2/all',
	byCode: 'https://restcountries.eu/rest/v2/alpha?codes=',
};

export const state = {
	favCountries: JSON.parse(window.localStorage.getItem('favorites')) || [],
	countryNav: JSON.parse(window.localStorage.getItem('countryNav')) || {
		table: false,
		map: true,
	},
	countryCode: {},
};
