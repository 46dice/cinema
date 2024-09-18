import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import React, { FC } from 'react';

import { primaryColor } from '@/config/constants';

import Favicons from './FavIcons';

const ProgressBar: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<NextTopLoader
				color={primaryColor}
				height={4}
				showSpinner={false}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<Favicons />

				<meta name="theme-color" content={'#181B1E'} />
				<meta
					name="msapplication-navbutton-color"
					content={'#181B1E'}
				/>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
	);
};

export default ProgressBar;
