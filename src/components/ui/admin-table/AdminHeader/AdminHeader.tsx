import { ChangeEvent, FC } from 'react';

import SearchField from '../../SearchField/SearchField';
import Button from '../../form-elements/Button/Button';

import styles from './AdminHeader.module.scss';

interface AdminSearch {
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
	searchTerm: string;
	onClick?: () => void;
}

const AdminSearch: FC<AdminSearch> = ({
	handleSearch,
	searchTerm,
	onClick,
}) => {
	return (
		<div className={styles.headerWrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{onClick && <Button>Create now</Button>}
		</div>
	);
};

export default AdminSearch;
