import { FC } from 'react';

import Heading from '@/components/ui/heading/Heading';

import styles from '../Admin.module.scss';

import CountUsers from './CountUsers';
import PopularMovie from './PopularMovie';

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<Heading title="Some statistics" />
			<div className={styles.wrapper}>
				<CountUsers />
				<PopularMovie />
			</div>
		</div>
	);
};

export default Statistics;
