import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/logo.svg';

const Logo = () => {
	return (
		<Link href={'/'} className="px-layout mb-10">
			<Image
				src={logo}
				alt="Online-cinema"
				width={250}
				height={50}
				draggable={false}
			/>
		</Link>
	);
};

export default Logo;
