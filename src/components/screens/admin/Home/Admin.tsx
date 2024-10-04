import { FC } from 'react';

import AdminNavPanel from '@/components/ui/admin-navigation/AdminNavPanel';

import Statistics from './Statistics/Statistics';

const Admin: FC = () => {
	return (
		<div>
			<AdminNavPanel />
			<Statistics />
		</div>
	);
};

export default Admin;
