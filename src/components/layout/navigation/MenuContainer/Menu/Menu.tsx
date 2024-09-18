import { FC } from 'react';

import UserMenu from '../../User/UserMenu';
import MenuItem from '../MenuItem/MenuItem';
import { IMenu } from '../menuContainer.interface';

import styles from './Menu.module.scss';

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<h2>{title}</h2>
			<ul className={styles.list}>
				{items?.length
					? items?.map((itemMenu) => (
							<MenuItem key={itemMenu.link} item={itemMenu} />
						))
					: []}

				{title === 'general' && <UserMenu />}
			</ul>
		</div>
	);
};

export default Menu;
