import { getContentType } from 'api/api.helpers';
import { axiosClassic } from 'api/interceptors';
import Cookies from 'js-cookie';

import { API_URL, getAuthUrl } from '@/config/url.config';

import { IAuthResponse } from '@/store/user/user.interface';

import { removeTokensStorage, saveToStorage } from './auth.helpers';

export const authService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('register'),
			{
				email,
				password,
			}
		);

		if (response.data.accessToken) saveToStorage(response.data);

		return response;
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('login'),
			{
				email,
				password,
			}
		);

		if (response.data.accessToken) saveToStorage(response.data);
		console.log(response);
		return response;
	},

	async logout() {
		removeTokensStorage();
		localStorage.removeItem('user');
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken');
		const response = await axiosClassic.post(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		);

		if (response.data.accessToken) saveToStorage(response.data);

		return response;
	},
};
