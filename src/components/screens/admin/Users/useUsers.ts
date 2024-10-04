'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toastError } from 'api/api.helpers';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

import useDebounce from '@/hooks/useDebounce';

import { ITableItem } from '@/shared/types/table-item.interface';

import { userService } from '@/services/user.service';

import { convertMongoDate } from '@/utils/convertMongoDate';

import { getAdminUrl } from '@/config/url.config';

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedValue = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['user list', debouncedValue],
		queryFn: () => userService.getAll(debouncedValue),
		select: ({ data }) =>
			data.map(
				(user): ITableItem => ({
					_id: user._id,
					editUrl: getAdminUrl(`/users/change/${user._id}`),
					tableInfo: [user.email, convertMongoDate(user.createdAt)],
				})
			),
	});

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['user delete'],
		mutationFn: (userId: string) => userService.deleteUser(userId),
		onError: (error) => toastError(error),
		onSuccess: () => {
			toast.success('user deleted');
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
