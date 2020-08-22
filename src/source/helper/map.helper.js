import { geoPath, geoMercator, zoom, event } from 'd3';

/**
 *
 * @param {array} countries  takes geo path of different countries
 * @returns {SVGPathElement} a group of path elements
 * @example
 * const g = getMap(svg, countriesMap);
 */
export function getMap(svg, countries) {
	const width = svg.attr('width');
	const height = svg.attr('height');
	const sphere = { type: 'Sphere' };

	const projection = geoMercator();
	const pathGenerator = geoPath().projection(projection);

	const g = svg.append('g');
	g.append('path').attr('d', pathGenerator(sphere));

	function zoomed() {
		g.attr('transform', event.transform);
	}
	svg.call(
		zoom()
			.extent([
				[0, 0],
				[width, height],
			])
			.scaleExtent([1, 6])
			.on('zoom', zoomed)
	);

	return g
		.attr('class', 'world')
		.selectAll('path')
		.data(countries.features)
		.enter()
		.append('path')
		.attr('class', 'country')
		.attr('d', pathGenerator);
}
