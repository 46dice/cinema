import axios from 'api/interceptors';

import { IUserUI } from '@/shared/types/user.interface';

import { getUsersUrl } from '@/config/url.config';

export const userService = {
	async getAll(searchTerm: string) {
		return await axios.get<IUserUI[]>(getUsersUrl(``), {
			params: {
				searchTerm,
			},
		});
	},

	async deleteUser(id: string) {
		return await axios.delete(getUsersUrl(`/${id}`));
	},
};
