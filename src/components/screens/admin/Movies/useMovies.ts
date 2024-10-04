'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toastError } from 'api/api.helpers';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

import useDebounce from '@/hooks/useDebounce';

import { ITableItem } from '@/shared/types/table-item.interface';

import { movieService } from '@/services/movie.service';

import { getNameGenres } from '@/utils/genres/getNameGenres';

import { getAdminUrl } from '@/config/url.config';

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedValue = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['movie admin list', debouncedValue],
		queryFn: () => movieService.getAll(debouncedValue),
		select: ({ data }) =>
			data.map(
				(movie): ITableItem => ({
					_id: movie._id,
					editUrl: getAdminUrl(`/movies/change/${movie._id}`),
					tableInfo: [
						movie.title,
						getNameGenres(movie.genres),
						String(movie.rating),
					],
				})
			),
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['movie delete'],
		mutationFn: (movieId: string) => movieService.delete(movieId),
		onError: (error) => toastError(error),
		onSuccess: () => {
			toast.success('movie deleted');
			queryData.refetch();
		},
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value);
	};

	const removeHandler = (id: string) => {
		deleteAsync(id);
	};

	return {
		handleSearch,
		searchTerm,
		...queryData,
		removeHandler,
	};
};
