import Admin from '@/components/screens/admin/Admin';

import { NextAuthPage } from '@/shared/types/pagesAuth.types';

import styles from './page.module.scss';

const Page: NextAuthPage = () => {
	return <Admin />;
};

Page.isOnlyAdmin = true;

export default Page;
