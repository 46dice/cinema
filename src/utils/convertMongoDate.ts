export const convertMongoDate = (date: Date) =>
	new Date(date).toLocaleDateString('ru');
