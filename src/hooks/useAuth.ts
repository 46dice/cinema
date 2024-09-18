'use client';

import { useTypedSelector } from './useTypedSelector';

export const useAuth = () => {
	const useAuthSelector = useTypedSelector();
	return useAuthSelector((state) => state.userReducer);
};
