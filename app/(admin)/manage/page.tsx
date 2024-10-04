import Admin from '@/components/screens/admin/Home/Admin';

import { NextAuthPage } from '@/shared/types/pagesAuth.types';

const Page: NextAuthPage = () => {
	return <Admin />;
};

Page.isOnlyAdmin = true;

export default Page;
