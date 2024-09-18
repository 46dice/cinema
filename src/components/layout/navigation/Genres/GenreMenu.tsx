'use client';

import 'react-loading-skeleton/dist/skeleton.css';

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader';

import Menu from '../MenuContainer/Menu/Menu';
import { IMenuItem } from '../MenuContainer/menuContainer.interface';

import useGenreQuery from './useGenreQuery';

function GenreMenu() {
	const { data, isLoading } = useGenreQuery();
	return isLoading ? (
		<SkeletonLoader
			count={4}
			height={20}
			width={'100%'}
			className={'mb-2'}
		/>
	) : (
		<>
			<Menu menu={{ title: 'Genres', items: data as IMenuItem[] }} />
		</>
	);
}

export default GenreMenu;
