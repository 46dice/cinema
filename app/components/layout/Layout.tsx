import { FC } from 'react';

import { LayoutProps } from './Layout.interface';
import styles from './Layout.module.scss';
import { Navigation } from './navigation/Navigation';
import { Sidebar } from './sidebar/Sidebar';

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	);
};
