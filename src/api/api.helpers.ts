import toast from 'react-hot-toast';

export const getContentType = () => ({ 'Content-type': 'application/json' });

export const errorCatch = (error: any): string => {
	return error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message;
};

export const toastError = (error: Error) => toast.error(errorCatch(error));
