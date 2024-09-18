import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { TypeRootState } from '@/store/store';

export const useTypedSelector = () => {
	const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
	return useAppSelector;
};
