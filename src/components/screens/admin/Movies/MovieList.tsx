'use client';

import { FC } from 'react';

import AdminNavPanel from '@/ui/admin-navigation/AdminNavPanel';
import AdminSearch from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable';
import Heading from '@/ui/heading/Heading';

import { movieTableHeaders } from './table-Headers.data';
import { useMovies } from './useMovies';

const MovieList: FC = () => {
	const { handleSearch, searchTerm, data, removeHandler, isLoading } =
		useMovies();

	const handleCreateMovie = () => {};

	return (
		<div>
			<AdminNavPanel />
			<Heading title="Movies" />
			<AdminSearch
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={handleCreateMovie}
			/>

			<AdminTable
				headerItems={movieTableHeaders}
				isLoading={isLoading}
				items={data || []}
				handleDelete={removeHandler}
			/>
		</div>
	);
};

export default MovieList;
