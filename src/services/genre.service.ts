import { IGenre } from '@/shared/types/movie.types';

import { axiosClassic } from '../api/interceptors';
import { getGenresUrl } from '../config/url.config';

export const GenreService = {
	async getGenres() {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''));
	},
};
