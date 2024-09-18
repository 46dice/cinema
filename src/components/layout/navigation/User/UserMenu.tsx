import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

import MenuItem from '../MenuContainer/MenuItem/MenuItem';

import LogoutButton from './LogoutButton';

const UserMenu: FC = () => {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							link: '/profile',
							icon: 'MdSettings',
							title: 'Settings',
						}}
					/>
					<LogoutButton />
					{user.isAdmin && (
						<MenuItem
							item={{
								link: '/manage',
								icon: 'MdAdminPanelSettings',
								title: 'Admin panel',
							}}
						/>
					)}
				</>
			) : (
				<MenuItem
					item={{
						link: '/auth',
						icon: 'MdLogin',
						title: 'Login',
					}}
				/>
			)}
		</>
	);
};

export default UserMenu;
