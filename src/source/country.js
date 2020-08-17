import 'babel-polyfill';
import { select, json, geoPath, geoMercator, zoom, event } from 'd3';
import { feature } from 'topojson';

import { getMap } from './helper/map.helper';
import { changeState } from './helper/function.helper';
import { menuState, MAP_URL, REST_URL } from './constants/constants';
import { doGet } from './helper/request.helper';

// import '../style/style.css';

/* SECTION hamburger menu */
const navList = document.querySelector('.l-nav__list-container');
const navToggler = document.querySelector('.nav__toggler');
const modalContext = document.querySelector('.countries__modal-inner');

navToggler.addEventListener('click', () => {
	if (navToggler.classList.contains('nav__toggler--close')) {
		changeState(navToggler, menuState.toggle.close, menuState.toggle.open);
		changeState(navList, menuState.navList.display, menuState.navList.hide);
	} else {
		changeState(navToggler, menuState.toggle.open, menuState.toggle.close);
		changeState(navList, menuState.navList.hide, menuState.navList.display);
	}
});

const render = async () => {
	const worldMap = await json(MAP_URL);
	const countriesMap = feature(worldMap, worldMap.objects.countries);

	const svg = select('#countriesMap');
	const g = await getMap(svg, countriesMap);
	g.on('click', async (d) => {
		modalContext.innerHTML = '';
		let selected = d.properties.name.toLowerCase();
		// TODO delete console log
		console.log(selected);

		const json = await doGet(`${REST_URL.byName}${selected}`);

		const h2 = document.createElement('h2');
		const img = document.createElement('img');
		img.width = 100;
		img.src = json[0].flag;
		h2.textContent = json[0].name;
		modalContext.append(h2);
		modalContext.append(img);
	});
};

render();
