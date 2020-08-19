export function setFavorite(star, { favCountries }, { alpha3Code }) {
	const storage = window.localStorage;
	const favorites = favCountries || [];

	star.classList.toggle('card__start--added');

	if (star.classList.contains('card__start--added')) {
		if (!favorites.includes(alpha3Code)) {
			favorites.push(alpha3Code);
		}
		storage.setItem('favorites', JSON.stringify(favorites));
		return favorites;
	}
	/* TODO change the naming something are you sure? */
	let storageFaves = JSON.parse(storage.getItem('favorites'));
	storageFaves = storageFaves.filter((code) => code !== alpha3Code);
	storage.setItem('favorites', JSON.stringify(storageFaves));
	return storageFaves;
}
