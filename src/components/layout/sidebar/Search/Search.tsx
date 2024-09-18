import { FC } from 'react';
import { toastr } from 'react-redux-toastr';

import SearchField from '@/ui/SearchField/SearchField';

import styles from './Search.module.scss';
import SearchList from './SearchList/SearchList';
import useSearch from './useSearch';

const Search: FC = () => {
	const { handleSearch, data, searchTerm, isSuccess } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

export default Search;
