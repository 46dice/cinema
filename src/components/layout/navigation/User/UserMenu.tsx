import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

import { getAdminUrl, getProfileUrl } from '@/config/url.config';

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
							link: getProfileUrl(''),
							icon: 'MdSettings',
							title: 'Settings',
						}}
					/>
					<LogoutButton />
					{user.isAdmin && (
						<MenuItem
							item={{
								link: getAdminUrl(''),
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
