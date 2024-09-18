import { FC } from 'react';

const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <h2 className="text-white text-xl">{title}</h2>;
};

export default SubHeading;
