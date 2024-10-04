import { IGenre } from '@/shared/types/movie.types';

export const getNameGenres = (arr: IGenre[]): string =>
	arr.map((genre) => genre.name).join(', ');
