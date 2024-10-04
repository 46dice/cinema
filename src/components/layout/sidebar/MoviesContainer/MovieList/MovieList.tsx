import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import SkeletonLoader from '@/components/ui/SkeletonLoader/SkeletonLoader';

import { IMovie } from '@/shared/types/movie.types';

import { movieService } from '@/services/movie.service';

import MovieItem from '../MovieItem/MovieItem';

import styles from './MovieList.module.scss';

const MovieList: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['most popular'],
		queryFn: async () => await movieService.getPopular(),
		select: ({ data }) => data,
	});

	return (
		<ul className={styles.list}>
			{isLoading ? (
				<SkeletonLoader count={4} />
			) : (
				data?.map((movie: IMovie) => (
					<MovieItem movie={movie} key={movie._id} />
				))
			)}
		</ul>
	);
};

export default MovieList;
