import axios from 'axios';

const request = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
});

export const call = (method = 'get', url, payload = null) => {
	try {
		const res = request({
			method: method,
			url: url,
			data: payload,
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};
