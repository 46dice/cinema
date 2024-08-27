import React from 'react';

import Logo from './Logo';
import MenuContainer from './MenuContainer/MenuContainer';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	);
};
