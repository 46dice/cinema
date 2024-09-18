import { IMovie } from '@/shared/types/movie.types';

import { axiosClassic } from '../api/interceptors';
import { getMoviesUrl } from '../config/url.config';

export const searchMovieService = {
	async getAll(searchTerm: string) {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
	async getPopular() {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl('most-popular'));
	},
};
