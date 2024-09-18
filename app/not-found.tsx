import { Metadata } from 'next';
import { FC } from 'react';

import Heading from '../src/components/ui/heading/Heading';

export const metadata: Metadata = {
	title: '404 not found page',
	robots: { index: false, follow: false },
};

const NotFound: FC = () => {
	return <Heading className="text-white" title="404 - Not found page" />;
};

export default NotFound;
