'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const { user } = useAuth();
	const router = useRouter();

	if (!user?.isAdmin) {
		router.replace('/404');
	}

	return <>{children}</>;
};

export default AdminLayout;
