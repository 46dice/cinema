'use client';

import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import SkeletonLoader from '@/components/ui/SkeletonLoader/SkeletonLoader';
import SubHeading from '@/components/ui/heading/SubHeading';

import { IMovie } from '@/shared/types/movie.types';

import { movieService } from '@/services/movie.service';

import styles from '../Admin.module.scss';

const PopularMovie: FC = () => {
	const { data: movie, isLoading } = useQuery({
		queryKey: ['admin popular movie'],
		queryFn: () => movieService.getPopular(),
		select: ({ data }) => data[0] as IMovie,
	});

	return (
		<div className={cn(styles.block, styles.popularMovie)}>
			<SubHeading title={'The most popular movie'} />
			{isLoading ? (
				<SkeletonLoader count={3} />
			) : (
				movie && (
					<>
						<span className={styles.info}>
							Opened {movie?.countOpened} times. NAME:{' '}
							{movie.title}
						</span>
						<Link href={movie?.slug}>
							<Image
								src={movie?.bigPoster}
								alt={movie?.title}
								width={285}
								height={280}
								className={styles.image}
							/>
						</Link>
					</>
				)
			)}
		</div>
	);
};

export default PopularMovie;
