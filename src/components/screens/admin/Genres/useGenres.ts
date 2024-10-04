'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toastError } from 'api/api.helpers';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

import useDebounce from '@/hooks/useDebounce';

import { ITableItem } from '@/shared/types/table-item.interface';

import { genreService } from '@/services/genre.service';

import { getActorsUrl, getGenresUrl } from '@/config/url.config';

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedValue = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['genre admin list', debouncedValue],
		queryFn: () => genreService.getAll(debouncedValue),
		select: ({ data }) =>
			data.map(
				(genre): ITableItem => ({
					_id: genre._id,
					editUrl: getGenresUrl(`/genre/change/${genre._id}`),
					tableInfo: [genre.name, genre.slug],
				})
			),
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['genre delete'],
		mutationFn: (actorId: string) => genreService.delete(actorId),
		onError: (error) => toastError(error),
		onSuccess: () => {
			toast.success('genre deleted');
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
