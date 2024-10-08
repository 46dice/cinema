import { FC } from 'react';

import MoviesContainer from './MoviesContainer/MoviesContainer';
import Search from './Search/Search';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	);
};
