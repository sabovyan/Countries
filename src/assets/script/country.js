import { changeState } from './helper/function.helper';
import { menuState, themeState } from './helper/constants';
import { D3 } from 'D3';


/* SECTION hamburger menu */
const navList = document.querySelector('.l-nav__list-container');
const navToggler = document.querySelector('.nav__toggler');

navToggler.addEventListener('click', () => {
	if (navToggler.classList.contains('nav__toggler--close')) {
		changeState(navToggler, menuState.toggle.close, menuState.toggle.open);
		changeState(navList, menuState.navList.display, menuState.navList.hide);
	} else {
		changeState(navToggler, menuState.toggle.open, menuState.toggle.close);
		changeState(navList, menuState.navList.hide, menuState.navList.display);
	}
});

/* SECTION settings for  theme colors */
const themeIndicator = document.querySelector('.nav__theme');
const themeSlider = document.querySelector('.nav__theme-slider');
const navTheme = document.querySelector('.nav__theme');
const navLogo = document.querySelector('.nav__logo');

navTheme.addEventListener('click', () => {
	themeState.bgColor = getComputedStyle(
		document.documentElement
	).getPropertyValue('--bg-color');

	themeState.txtColor = getComputedStyle(
		document.documentElement
	).getPropertyValue('--text-color');

	document.documentElement.style.setProperty(
		'--text-color',
		themeState.bgColor
	);
	localStorage.setItem('textColor', themeState.bgColor);

	document.documentElement.style.setProperty('--bg-color', themeState.txtColor);

	localStorage.setItem('bgColor', themeState.txtColor);

	if (themeSlider.classList.contains('nav__theme-slider--light')) {
		changeState(themeIndicator, themeState.theme.light, themeState.theme.dark);

		changeState(themeSlider, themeState.slider.light, themeState.slider.dark);

		changeState(navLogo, themeState.logo.light, themeState.logo.dark);
	} else {
		changeState(themeIndicator, themeState.theme.dark, themeState.theme.light);

		changeState(themeSlider, themeState.slider.dark, themeState.slider.light);

		changeState(navLogo, themeState.logo.dark, themeState.logo.light);
	}
});

const render = () => {
	fetch('https://restcountries.eu/rest/v2/all')
		.then((r) => r.json())
		.then((json) => console.log(json));

	fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
		.then((r) => r.json())
		.then((json) => console.log(json));
};

render();
