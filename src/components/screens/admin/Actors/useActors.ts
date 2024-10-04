'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toastError } from 'api/api.helpers';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

import useDebounce from '@/hooks/useDebounce';

import { ITableItem } from '@/shared/types/table-item.interface';

import { actorsService } from '@/services/actors.service';

import { getActorsUrl } from '@/config/url.config';

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedValue = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['actors admin list', debouncedValue],
		queryFn: () => actorsService.getAll(debouncedValue),
		select: ({ data }) =>
			data.map(
				(actor): ITableItem => ({
					_id: actor._id,
					editUrl: getActorsUrl(`/actors/change/${actor._id}`),
					tableInfo: [actor.name, actor.countMovies as string],
				})
			),
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['actor delete'],
		mutationFn: (actorId: string) => actorsService.delete(actorId),
		onError: (error) => toastError(error),
		onSuccess: () => {
			toast.success('actor deleted');
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
