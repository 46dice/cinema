'use client';

import { FC } from 'react';

import AdminNavPanel from '@/ui/admin-navigation/AdminNavPanel';
import AdminSearch from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable';
import Heading from '@/ui/heading/Heading';

import { actorsTableHeaders } from './table-headers.data';
import { useActors } from './useActors';

const ActorsList: FC = () => {
	const { handleSearch, searchTerm, data, removeHandler, isLoading } =
		useActors();

	const handleCreateMovie = () => {};

	return (
		<div>
			<AdminNavPanel />
			<Heading title="Actors" />
			<AdminSearch handleSearch={handleSearch} searchTerm={searchTerm} />

			<AdminTable
				headerItems={actorsTableHeaders}
				isLoading={isLoading}
				items={data || []}
				handleDelete={removeHandler}
			/>
		</div>
	);
};

export default ActorsList;
