'use client';

import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import { FC } from 'react';

import SkeletonLoader from '@/components/ui/SkeletonLoader/SkeletonLoader';

import { adminService } from '@/services/admin.service';

import styles from '../Admin.module.scss';

const CountUsers: FC = () => {
	const { data: response, isLoading } = useQuery({
		queryKey: ['count users'],
		queryFn: async () => await adminService.getCountUsers(),
	});

	return (
		<div className={cn(styles.block, styles.count)}>
			<div className={styles.container}>
				<span>{isLoading ? <SkeletonLoader /> : response?.data}</span>
				<span>users</span>
			</div>
		</div>
	);
};

export default CountUsers;
