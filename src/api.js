const BASE_URL = 'http://localhost:3003';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) => delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
	await simulateNetworkLatency();

	options.headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};

	const url = BASE_URL + endpoint;
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}

const api = {
	alumnos: {
		list() {
			// throw new Error('500: Server Error');
			return callApi('/alumnos');
		},
		create(badge) {
			// throw new Error('500: Server error');
			return callApi(`/alumnos`, {
				method: 'POST',
				body: JSON.stringify(badge),
			});
		},
		read(badgeId) {
			return callApi(`/alumnos/${badgeId}`);
		},
		update(badgeId, updates) {
			return callApi(`/alumnos/${badgeId}`, {
				method: 'PUT',
				body: JSON.stringify(updates),
			});
		},
		// Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
		remove(badgeId) {
			return callApi(`/alumnos/${badgeId}`, {
				method: 'DELETE',
			});
		},
	},
	controlDePago: {
		list() {
			// throw new Error('500: Server Error');
			return callApi('/controlDePago');
		},
		create(badge) {
			// throw new Error('500: Server error');
			return callApi(`/controlDePago`, {
				method: 'POST',
				body: JSON.stringify(badge),
			});
		},
		read(badgeId) {
			return callApi(`/controlDePago/${badgeId}`);
		},
		update(badgeId, updates) {
			return callApi(`/controlDePago/${badgeId}`, {
				method: 'PUT',
				body: JSON.stringify(updates),
			});
		},
		// Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
		remove(badgeId) {
			return callApi(`/controlDePago/${badgeId}`, {
				method: 'DELETE',
			});
		},
	},
	mesesPago: {
		list() {
			// throw new Error('500: Server Error');
			return callApi('/mesesPago');
		},
		create(badge) {
			// throw new Error('500: Server error');
			return callApi(`/mesesPago`, {
				method: 'POST',
				body: JSON.stringify(badge),
			});
		},
		read(badgeId) {
			return callApi(`/mesesPago/${badgeId}`);
		},
		update(badgeId, updates) {
			return callApi(`/mesesPago/${badgeId}`, {
				method: 'PUT',
				body: JSON.stringify(updates),
			});
		},
		// Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
		remove(badgeId) {
			return callApi(`/mesesPago/${badgeId}`, {
				method: 'DELETE',
			});
		},
	}
};

export default api;