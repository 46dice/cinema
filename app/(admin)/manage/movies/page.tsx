import { Metadata } from 'next';
import { FC } from 'react';

import MovieList from '@/components/screens/admin/Movies/MovieList';

export const metadata: Metadata = {
	title: 'Movies list',
	description: 'admin panel',
	robots: 'no-index',
};

const Page: FC = () => {
	return <MovieList />;
};

export default Page;
