import Cookies from 'js-cookie';

import { IAuthResponse } from '@/store/user/user.interface';

const saveToCookie = (data: IAuthResponse) => {
	const { accessToken, refreshToken } = data;
	Cookies.set('accessToken', accessToken);
	Cookies.set('refreshToken', refreshToken);
};

export const removeTokensStorage = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};

export const saveToStorage = (data: IAuthResponse) => {
	saveToCookie(data);
	console.log(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};
