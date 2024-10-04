import { IMovie } from '@/shared/types/movie.types';

import { axiosClassic } from '../api/interceptors';
import axios from '../api/interceptors';
import { getMoviesUrl } from '../config/url.config';

export const movieService = {
	async getAll(searchTerm: string) {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
	async getPopular() {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl('most-popular'));
	},

	async delete(id: string) {
		return await axios.delete(getMoviesUrl(`/${id}`));
	},
};
