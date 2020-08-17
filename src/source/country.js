import 'babel-polyfill';
import { select, json, geoPath, geoMercator, zoom, event } from 'd3';
import { feature } from 'topojson';
import { changeState } from './helper/function.helper';
import { menuState } from './helper/constants';

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

const svg = select('#countriesMap');

const render = async () => {
	const width = svg.attr('width');
	const height = svg.attr('height');
	const projection = geoMercator()
		.scale(80)
		.translate([width / 2, height / 2]);
	const pathGenerator = geoPath().projection(projection);

	const sphere = { type: 'Sphere' };

	const g = svg.append('g');
	g.append('path').attr('class', 'rect').attr('d', pathGenerator(sphere));
	function zoomed() {
		g.attr('transform', event.transform);
	}

	svg.call(
		zoom()
			.extent([
				[0, 0],
				[width, height],
			])
			.scaleExtent([1.1, 8])
			.on('zoom', zoomed)
	);

	const world = await json(
		'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'
	);
	const countries = feature(world, world.objects.countries);
	/* TODO delete it after you complete */

	g.attr('class', 'world')
		.selectAll('path')
		.data(countries.features)
		.enter()
		.append('path')
		.attr('class', 'country')
		.attr('d', pathGenerator)
		.on('click', (d) => {
			console.log(d.properties.name);
		});
};

render();
