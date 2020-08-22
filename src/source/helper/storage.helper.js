/**
 *
 * @param {HTMLElement} star
 * @param {string} className
 * @param {Array} favCountries
 * @param {string} alpha3Code
 * @returns all the favorites countries' alpha3code
 */
export function setFavorite(star, className, favCountries, alpha3Code) {
	const storage = window.localStorage;
	const favorites = favCountries || [];

	star.classList.toggle(className);

	if (star.classList.contains(className)) {
		if (!favorites.includes(alpha3Code)) {
			favorites.push(alpha3Code);
		}
		storage.setItem('favorites', JSON.stringify(favorites));
		return favorites;
	}
	let storageFaves = JSON.parse(storage.getItem('favorites'));
	storageFaves = storageFaves.filter((code) => code !== alpha3Code);
	storage.setItem('favorites', JSON.stringify(storageFaves));
	return storageFaves;
}
