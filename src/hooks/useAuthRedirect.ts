import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from './useAuth';

export const useAuthRedirect = () => {
	const { user } = useAuth();
	const { push } = useRouter();
	const query = useSearchParams();

	const redirect = '/' || query?.get('redirect');

	useEffect(() => {
		if (user) push(redirect);
	}, [user, push, redirect]);
};
