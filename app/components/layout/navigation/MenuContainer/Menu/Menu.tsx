import { FC } from 'react';

import { API_URL } from '@/config/api.config';

import MenuItem from '../MenuItem/MenuItem';
import { IMenu } from '../menuContainer.interface';

import styles from './Menu.module.scss';

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	console.log(API_URL);

	return (
		<div className={styles.menu}>
			<h2 className={styles.title}>{title}</h2>
			<ul className={styles.list}>
				{items.map((itemMenu) => (
					<MenuItem key={itemMenu.link} item={itemMenu} />
				))}
			</ul>
		</div>
	);
};

export default Menu;
