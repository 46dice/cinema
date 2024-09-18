'use client';

import { FC } from 'react';

import { ComponentAuthFields } from '@/shared/types/pagesAuth.types';

import MainProvider from '../src/providers/MainProvider';

import './globals.scss';

const Layout: FC<ComponentAuthFields> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	);
};

export default Layout;
