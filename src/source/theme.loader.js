import { changeState } from './helper/function.helper';
import { themeState } from './constants/constants';

const themeIndicator = document.querySelector('.nav__theme');
const themeSlider = document.querySelector('.nav__theme-slider');
const navTheme = document.querySelector('.nav__theme');
const navLogo = document.querySelector('.nav__logo');

const changeThemeState = () => {
	const textColor = localStorage.getItem('textColor');
	const bgColor = localStorage.getItem('bgColor');
	document.documentElement.style.setProperty('--text-color', textColor);
	document.documentElement.style.setProperty('--bg-color', bgColor);

	if (textColor.trim() === '#343434') {
		changeState(themeIndicator, themeState.theme.dark, themeState.theme.light);

		changeState(themeSlider, themeState.slider.dark, themeState.slider.light);

		changeState(navLogo, themeState.logo.dark, themeState.logo.light);
	} else {
		changeState(themeIndicator, themeState.theme.light, themeState.theme.dark);

		changeState(themeSlider, themeState.slider.light, themeState.slider.dark);

		changeState(navLogo, themeState.logo.light, themeState.logo.dark);
	}
};
changeThemeState();
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
