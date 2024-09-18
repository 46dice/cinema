import { NextAuthPage } from '@/shared/types/pagesAuth.types';

import styles from './page.module.scss';

const Page: NextAuthPage = () => {
	return <div>page</div>;
};

Page.isOnlyUser = true;

export default Page;
