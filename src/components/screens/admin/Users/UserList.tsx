'use client';

import { FC } from 'react';

import AdminNavPanel from '@/ui/admin-navigation/AdminNavPanel';
import AdminSearch from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable';
import Heading from '@/ui/heading/Heading';

import { userTableHeaders } from './table-Headers.data';
import { useUsers } from './useUsers';

const UserList: FC = () => {
	const { handleSearch, searchTerm, data, removeHandler, isLoading } =
		useUsers();

	return (
		<div>
			<AdminNavPanel />
			<Heading title="Users" />
			<AdminSearch handleSearch={handleSearch} searchTerm={searchTerm} />

			<AdminTable
				headerItems={userTableHeaders}
				isLoading={isLoading}
				items={data || []}
				handleDelete={removeHandler}
			/>
		</div>
	);
};

export default UserList;
