import { IGenre, IGenreEditInput } from '@/shared/types/movie.types';

import axios from '../api/interceptors';
import { axiosClassic } from '../api/interceptors';
import { getGenresUrl } from '../config/url.config';

export const genreService = {
	async getAll(searchTerm: string) {
		return await axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async getById(id: string) {
		return await axios.get<IGenre>(getGenresUrl(`${id}`));
	},

	async update(id: string, data: IGenreEditInput) {
		return await axios.put<IGenreEditInput>(getGenresUrl(`${id}`), data);
	},

	async delete(id: string) {
		return await axios.delete(getGenresUrl(`${id}`));
	},
};
