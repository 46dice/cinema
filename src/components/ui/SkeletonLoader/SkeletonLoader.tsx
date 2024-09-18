import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			baseColor="#202020"
			highlightColor="#444"
			{...rest}
			className={className ? className : ''}
		/>
	);
};

export default SkeletonLoader;
