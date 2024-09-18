import GenreMenu from '../Genres/GenreMenu';
import UserMenu from '../User/UserMenu';

import Menu from './Menu/Menu';
import { navMenu } from './menu.data';

const MenuContainer = () => {
	return (
		<>
			<Menu menu={navMenu} />
			<GenreMenu />
			<Menu menu={{ title: 'general', items: [] }} />
		</>
	);
};

export default MenuContainer;
