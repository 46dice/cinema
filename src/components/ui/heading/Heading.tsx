import { FC } from 'react';

interface IHeading {
	title: string;
	className?: string;
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return <h1 className={`${className} text-2xl text-white mb-4`}>{title}</h1>;
};

export default Heading;
