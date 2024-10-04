import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { IGenreEditInput } from '@/shared/types/movie.types';

import { genreService } from '@/services/genre.service';

import { getKeys } from '@/utils/obj/getKeys';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const [isDataSet, setIsDataSet] = useState(false);

	const { push } = useRouter();
	const path = useParams();
	const genreId = String(path?.id);

	const { isLoading, error, isError, data, isSuccess } = useQuery({
		queryKey: ['get genre', genreId],
		queryFn: () => genreService.getById(genreId),
		select: ({ data }) => data,
		enabled: !!genreId,
	});

	useEffect(() => {
		if (isSuccess && !isDataSet) {
			getKeys(data).forEach((key) => {
				setValue(key, data[key]);
			});
			setIsDataSet(false);
		}
	}, [isDataSet, data, isSuccess]);

	const onSubmit = () => {};

	return useMemo(() => {
		return { isLoading, error, isError, data, onSubmit, isSuccess };
	}, [isLoading, error, isError, data]);
};
