import Link from 'next/link';
import { FC } from 'react';

import { ITableItem } from '@/shared/types/table-item.interface';

import MaterialIcon from '../../MaterialIcon';

import styles from './AdminActions.module.scss';

interface IAdminActions {
	item: ITableItem;
	handleDelete: (id: string) => void;
}

const AdminActions: FC<IAdminActions> = ({ item, handleDelete }) => {
	return (
		<td className={styles.actions}>
			<Link href={item.editUrl} target="_blank">
				<MaterialIcon icon="MdEdit" />
			</Link>
			<button
				onClick={() => handleDelete(item._id)}
				aria-label="delete item"
			>
				<MaterialIcon icon="MdClose" />
			</button>
		</td>
	);
};

export default AdminActions;
