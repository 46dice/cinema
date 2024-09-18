import { FC } from 'react';

import Heading from '@/ui/heading/Heading';

import { IHome } from './home.interface';

const Home: FC<IHome> = () => {
	return (
		<Heading title="Watch movies online" className="text-white text-xl" />
	);
};

export default Home;
