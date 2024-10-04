import { Metadata } from 'next';
import { FC } from 'react';

import UserList from '@/components/screens/admin/Users/UserList';

export const metadata: Metadata = {
	title: 'User list',
	description: 'admin panel',
	robots: 'no-index',
};

const Page: FC = () => {
	return <UserList />;
};

export default Page;
