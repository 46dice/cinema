import Menu from './Menu/Menu';
import { navMenu, userMenu } from './menu.data';

const MenuContainer = () => {
	return (
		<>
			<Menu menu={navMenu} />
			{/* <Menu menu={navMenu}/> */}
			{/* <Menu menu={userMenu}/> */}
		</>
	);
};

export default MenuContainer;
