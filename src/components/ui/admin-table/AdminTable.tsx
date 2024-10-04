import { FC } from 'react';

import { ITableItem } from '@/shared/types/table-item.interface';

import styles from './AdminTable.module.scss';
import AdminTableBody from './AdminTableBody';
import AdminTableHeader from './AdminTableHeader';

interface AdminTableProps<T> {
	headerItems: string[];
	items: T[];
	handleDelete: (id: string) => void;
	isLoading: boolean;
}

const AdminTable: FC<AdminTableProps<ITableItem>> = ({
	headerItems,
	items,
	handleDelete,
	isLoading,
}) => {
	return (
		<table className={styles.table}>
			<AdminTableHeader items={headerItems} />
			<AdminTableBody
				handleDelete={handleDelete}
				items={items}
				isLoading={isLoading}
			/>
		</table>
	);
};

export default AdminTable;
