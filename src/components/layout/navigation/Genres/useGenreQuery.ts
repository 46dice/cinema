'use client';

import { useQuery } from '@tanstack/react-query';

import { GenreService } from '@/services/genre.service';

import { IMenuItem } from '../MenuContainer/menuContainer.interface';

const useGenreQuery = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['genre menu'],
		queryFn: async () => await GenreService.getGenres(),

		select: ({ data }) =>
			data.map(
				(genre) =>
					({
						icon: genre.icon,
						title: genre.name,
						link: genre.slug,
					}) as IMenuItem
			),
	});

	return { data, isLoading };
};

export default useGenreQuery;
