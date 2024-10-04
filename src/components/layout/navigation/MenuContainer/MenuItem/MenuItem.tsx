import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import MaterialIcon from '@/ui/MaterialIcon';

import { IMenuItem } from '../menuContainer.interface';

import styles from './MenuItem.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const asPath = usePathname();
	const isCurrentLink = asPath?.match(item.link) && asPath === item.link;

	return (
		<li>
			<Link
				href={item.link}
				className={cn(isCurrentLink ? styles.active : null)}
			>
				<MaterialIcon icon={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	);
};

export default MenuItem;
