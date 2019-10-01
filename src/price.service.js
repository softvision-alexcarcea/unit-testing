import authService from './auth.service.js';

const MIN_PRICE = 45.99;
const VARIANCE = 19.99;

export default {
	get: () => {
		if (!authService.authenticated()) {
			throw new Error('NOT_AUTHENTICATED');
		}
		return MIN_PRICE + Math.random() * VARIANCE;
	}
};

