import { createSlice } from '@reduxjs/toolkit';

import { getStorageLocal } from '@/utils/local-storage';

import { login, logout, register } from './user.actions';
import { IInitialState } from './user.interface';

const initialState: IInitialState = {
	isLoading: false,
	user: getStorageLocal('user'),
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(register.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(register.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.user = payload.user;
		});
		builder.addCase(register.rejected, (state) => {
			state.isLoading = false;
			state.user = null;
		});

		builder.addCase(login.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.user = payload.user;
		});
		builder.addCase(login.rejected, (state) => {
			state.isLoading = false;
			state.user = null;
		});

		builder.addCase(logout.fulfilled, (state) => {
			state.isLoading = false;
			state.user = null;
		});
	},
});

export const { reducer } = userSlice;
