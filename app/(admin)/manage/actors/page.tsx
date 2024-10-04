import { Metadata } from 'next';
import { FC } from 'react';

import ActorsList from '@/components/screens/admin/Actors/ActorsList';

export const metadata: Metadata = {
	title: 'Admin: Actors list',
	robots: 'noindex',
};

const Page: FC = () => {
	return <ActorsList />;
};

export default Page;
