import { FC } from 'react';

import AdminNavItem from './AdminNavItem';
import { adminNavData } from './AdminNavPanel.data';
import styles from './AdminNavPanel.module.scss';

const AdminNavPanel: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{adminNavData.map((navItem) => (
					<AdminNavItem
						key={navItem.link}
						link={navItem.link}
						title={navItem.title}
					/>
				))}
			</ul>
		</nav>
	);
};

export default AdminNavPanel;
