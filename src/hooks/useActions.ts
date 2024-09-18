import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { checkAuth, login, logout, register } from '@/store/user/user.actions';

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(
		() =>
			bindActionCreators(
				{ register, login, logout, checkAuth },
				dispatch
			),
		[dispatch]
	);
};
