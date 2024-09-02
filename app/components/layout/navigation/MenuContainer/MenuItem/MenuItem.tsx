import Link from 'next/link';
import { FC } from 'react';

import MaterialIcon from '@/components/ui/MaterialIcon';

import { IMenuItem } from '../menuContainer.interface';

import styles from './MenuItem.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<Link href={item.link} className={styles.link}>
			<MaterialIcon icon={item.icon} />
			<span>{item.title}</span>
		</Link>
	);
};

export default MenuItem;
