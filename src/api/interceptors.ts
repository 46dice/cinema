import axios from 'axios';
import Cookies from 'js-cookie';

import { removeTokensStorage } from '@/services/auth/auth.helpers';
import { authService } from '@/services/auth/auth.service';

import { API_URL } from '../config/url.config';

import { errorCatch, getContentType } from './api.helpers';

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

instance.interceptors.request.use(async (config) => {
	const accessToken = Cookies.get('accessToken');
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

instance.interceptors.response.use(
	async (config) => config,
	async (error) => {
		const originalRequest = error.config;
		const isRetryError = originalRequest && !error.config._isRetry;

		const isBadRequest =
			errorCatch(error) === 'jwt expired' ||
			errorCatch(error) === 'jwt must be provided' ||
			error.response.status === 404;

		if (isRetryError && isBadRequest) {
			originalRequest._isRetry = true;

			try {
				await authService.getNewTokens();
				return instance.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokensStorage();
			}
		}
		throw error;
	}
);

export default instance;
