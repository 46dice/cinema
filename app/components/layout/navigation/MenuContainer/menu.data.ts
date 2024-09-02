import { IMenu } from './menuContainer.interface';

export const navMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			title: 'Home',
			link: '/',
		},
		{
			icon: 'MdExplore',
			title: 'Discovery',
			link: '/genres',
		},
		{
			icon: 'MdRefresh',
			title: 'Fresh Movies',
			link: '/fresh',
		},
		{
			icon: 'MdLocalFireDepartment',
			title: 'Trending now',
			link: '/trends',
		},
	],
};

export const userMenu: IMenu = {
	title: 'General',
	items: [],
};
