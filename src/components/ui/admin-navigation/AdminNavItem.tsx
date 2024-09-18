'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { INavAdminData } from './AdminNavPanel.interface';
import styles from './AdminNavPanel.module.scss';

const AdminNavItem: FC<INavAdminData> = ({ link, title }) => {
	const asPath = usePathname();

	return (
		<li className={cn(asPath === link ? styles.active : null)}>
			<Link href={link}>
				<span>{title}</span>
			</Link>
		</li>
	);
};

export default AdminNavItem;
