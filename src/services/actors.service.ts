import { IActor } from '@/shared/types/movie.types';

import { getActorsUrl } from '@/config/url.config';

import { axiosClassic } from '../api/interceptors';
import axios from '../api/interceptors';

export const actorsService = {
	async getAll(searchTerm: string) {
		return await axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async delete(id: string) {
		return await axios.delete(getActorsUrl(`/${id}`));
	},
};
