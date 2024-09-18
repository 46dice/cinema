'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

import { useAuth } from '@/hooks/useAuth';

const UserLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const { user } = useAuth();
	const router = useRouter();

	if (!user) {
		router.replace('/auth');
	}

	return <>{children}</>;
};

export default UserLayout;
