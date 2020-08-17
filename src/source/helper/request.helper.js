export const doGet = async (url) => {
	const r = await fetch(url);
	return await r.json();
};
