import { FC } from 'react';

import { ITableItem } from '@/shared/types/table-item.interface';

import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

import AdminActions from './AdminActions/AdminActions';

interface IAdminTableBody<T> {
	isLoading: Boolean;
	items: T[];
	handleDelete: (id: string) => void;
}

const AdminTableBody: FC<IAdminTableBody<ITableItem>> = ({
	isLoading,
	items,
	handleDelete,
}) => {
	return (
		<tbody>
			{isLoading ? (
				<tr>
					<td colSpan={3}>
						<SkeletonLoader
							count={5}
							height={30}
							className="mt-2"
						/>
					</td>
				</tr>
			) : items.length ? (
				items.map((itemTable) => (
					<tr key={itemTable._id}>
						{itemTable.tableInfo.map((item) => (
							<td>{item}</td>
						))}
						<AdminActions
							handleDelete={handleDelete}
							item={itemTable}
						/>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No items found</td>
				</tr>
			)}
		</tbody>
	);
};

export default AdminTableBody;
