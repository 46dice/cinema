import { Metadata } from 'next';
import { FC } from 'react';

import Home from '@/components/screens/home/Home';

export const metadata: Metadata = {
	title: 'Home',
	description:
		'Поиск фильмов, новости кино, отзывы пользователей, афиша кинотеатров, фотографии, постеры, трейлеры, кассовые сборы и многое другое.',
	openGraph: {
		title: 'Home',
		description:
			'Поиск фильмов, новости кино, отзывы пользователей и многое другое.',
		url: `${process.env.APP_URL}/home`,
		siteName: 'Your Site Name',
		images: [
			{
				url: '/path/to/your/image.jpg',
				alt: 'Home Page',
			},
		],
	},
};

const Page: FC = () => {
	return <Home />;
};

export default Page;
