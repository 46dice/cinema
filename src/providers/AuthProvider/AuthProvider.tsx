import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { FC, useEffect } from 'react';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import { ComponentAuthFields } from '@/shared/types/pagesAuth.types';

import { checkAuth } from '@/store/user/user.actions';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<ComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth();
	const { logout } = useActions();
	const pathName = usePathname();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) {
			checkAuth();
		}
	}, []);

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken');
		if (!refreshToken && user) {
			logout();
		}
	}, [pathName]);

	return !isOnlyAdmin && !isOnlyUser && user?.isAdmin ? (
		<>{children}</>
	) : (
		{ children }
	);
};

export default AuthProvider;
