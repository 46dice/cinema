import { getAdminUrl } from '@/config/url.config';

import { INavAdminData } from './AdminNavPanel.interface';

export const adminNavData: INavAdminData[] = [
	{
		title: 'Statistics',
		link: getAdminUrl(''),
	},

	{
		title: 'Users',
		link: getAdminUrl('/users'),
	},

	{
		title: 'Movies',
		link: getAdminUrl('/movies'),
	},

	{
		title: 'Actors',
		link: getAdminUrl('/actors'),
	},
	{
		title: 'Genres',
		link: getAdminUrl('/genres'),
	},
];
