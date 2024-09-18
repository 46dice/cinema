import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import MaterialIcon from '@/components/ui/MaterialIcon';

import { IMovie } from '@/shared/types/movie.types';

import deletingCommaInLastLine from '@/utils/string/deletingCommaInLastLine';

import styles from './MovieItem.module.scss';

interface IMovieItem {
	movie: IMovie;
}

const MovieItem: FC<IMovieItem> = ({ movie }) => {
	const { title, genres, rating, poster, slug } = movie;

	return (
		<Link href={slug} draggable={false} className={styles.link}>
			<Image
				src={poster}
				alt={title}
				draggable={false}
				width={50}
				height={50}
				objectFit="cover"
				objectPosition="top"
			/>
			<div className={styles.info}>
				<span className={styles.title}>{title}</span>
				<ul className={styles.genres}>
					{genres.map((genre, idx, arr) => (
						<li key={genre._id}>
							<Link href={genre.slug}>
								{deletingCommaInLastLine(arr, genre.name, idx)}
							</Link>
						</li>
					))}
				</ul>
				<div className={styles.rating}>
					<MaterialIcon icon="MdStar" />
					<span className={styles.ratingNum}>
						{rating.toFixed(1)}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default MovieItem;
