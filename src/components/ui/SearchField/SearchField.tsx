import React, { ChangeEvent, FC } from 'react';

import MaterialIcon from '../MaterialIcon';

import styles from './SearchField.module.scss';

interface ISearchField {
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
	searchTerm: string;
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon icon="MdSearch" />
			<input
				placeholder="Найти"
				type="text"
				onChange={handleSearch}
				value={searchTerm}
			/>
		</div>
	);
};

export default SearchField;
