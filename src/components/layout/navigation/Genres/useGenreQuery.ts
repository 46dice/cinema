'use client';

import { useQuery } from '@tanstack/react-query';

import { genreService } from '@/services/genre.service';

import { IMenuItem } from '../MenuContainer/menuContainer.interface';

const useGenreQuery = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['genre menu'],
		queryFn: async () => await genreService.getAll(''),

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
