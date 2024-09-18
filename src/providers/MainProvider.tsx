import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

import { Layout } from '../RootLayout';

// import AuthProvider from './AuthProvider/AuthProvider';
import ProgressBar from './ProgressBar/ProgressBar';
import ReduxToast from './ReduxToast';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ProgressBar>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</ProgressBar>
	);
};

export default MainProvider;
