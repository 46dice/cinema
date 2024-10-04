'use client';

import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';

import useDebounce from '@/hooks/useDebounce';

import { movieService } from '@/services/movie.service';

const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const { data, isSuccess } = useQuery({
		queryKey: ['search movie', debouncedSearchTerm],
		queryFn: async () => await movieService.getAll(debouncedSearchTerm),
		select: ({ data }) => data,
		enabled: !!debouncedSearchTerm,
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value);
	};

	return { handleSearch, searchTerm, data, isSuccess };
};

export default useSearch;
