import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { IMovie } from '@/shared/types/movie.types';

import styles from './SearchList.module.scss';

interface SearchList {
	movies: IMovie[];
}

const SearchList: FC<SearchList> = ({ movies }) => {
	return (
		<ul className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<li>
						<Link href={movie.slug}>
							<Image
								src={movie.poster}
								alt={movie.title}
								height={50}
								width={50}
								draggable={false}
								objectFit="cover"
								objectPosition="top"
							/>
							<span>{movie.title}</span>
						</Link>
					</li>
				))
			) : (
				<span className="text-white text-center">Movies not found</span>
			)}
		</ul>
	);
};

export default SearchList;
