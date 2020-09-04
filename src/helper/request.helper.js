/**
 * @description takes a url as an arguments fetches data from that link
 * @param {string} url
 * @returns {Promise}
 * @example
 * result = await doGet(REST_URL.all);
 */
export const doGet = async (url) => {
	let r;
	try {
		r = await fetch(url);
		if (r.status >= 400 && r.status < 500) {
			throw new Error('invalid Data');
		}
		if (r.status >= 500 && r.status < 600) {
			throw new Error('there is a problem with server');
		}
	} catch (err) {
		console.error(err.message);
	}
	return r.json();
};
