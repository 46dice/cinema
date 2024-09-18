import Link from 'next/link';
import { FC, MouseEvent } from 'react';

import MaterialIcon from '@/components/ui/MaterialIcon';

import { useActions } from '@/hooks/useActions';

const LogoutButton: FC = () => {
	const { logout } = useActions();

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		logout();
	};

	return (
		<li>
			<Link href={'/auth'} onClick={handleLogout}>
				<MaterialIcon icon="MdLogout" />
				<span>Logout</span>
			</Link>
		</li>
	);
};

export default LogoutButton;
