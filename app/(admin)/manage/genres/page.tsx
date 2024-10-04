import { Metadata } from 'next';
import { FC } from 'react';

import GenresList from '@/components/screens/admin/Genres/GenresList';

export const metadata: Metadata = {
	title: 'Admin: genre list',
	description: 'admin panel',
	robots: 'noindex',
};

const Page: FC = () => {
	return <GenresList />;
};

export default Page;
