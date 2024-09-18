// import { usePathname, useRouter } from 'next/navigation';
// import { FC } from 'react';

// import { useAuth } from '@/hooks/useAuth';

// import { ComponentAuthFields } from '@/shared/types/pagesAuth.types';

// const CheckRole: FC<ComponentAuthFields> = ({
// 	children,
// 	Component: { isOnlyAdmin, isOnlyUser },
// }) => {
// 	const { user } = useAuth();
// 	const { replace } = useRouter();

// 	const Children: FC = () => <>{children}</>;

// 	if (isOnlyAdmin) {
// 		replace('/404');
// 		return null;
// 	}
// 	const isUser = user && isOnlyUser;

// 	if (!isUser) {
// 		replace('/auth');
// 		return null;
// 	} else {
// 		return <Children />;
// 	}
// };

// export default CheckRole;
