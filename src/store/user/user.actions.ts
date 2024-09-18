import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'api/api.helpers';
import toast from 'react-hot-toast';

import { authService } from '@/services/auth/auth.service';

import { IAuthResponse, IEmailPassword } from './user.interface';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authService.register(email, password);
			toast.success('Registration successfully');
			return response.data;
		} catch (error) {
			const message = errorCatch(error);
			toast.error(message);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authService.login(email, password);
			toast.success('Login successfully');
			return response.data;
		} catch (error) {
			const message = errorCatch(error);
			toast.error(message);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk<void>('auth/logout', () => {
	authService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			const response = await authService.getNewTokens();
			return response.data;
		} catch (error) {
			const message = errorCatch(error);
			toast.error(message);
			thunkApi.dispatch(logout());
		}
	}
);
