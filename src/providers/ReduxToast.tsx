import React from 'react';
import { Toaster } from 'react-hot-toast';

const ReduxToast = () => {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			toastOptions={{
				style: {
					backgroundColor: '#242529',
					color: '#fff',
					border: '1px solid #66676e',
				},
				duration: 5000,
			}}
		/>
	);
};

export default ReduxToast;
