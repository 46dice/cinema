import { Metadata } from 'next';
import { usePathname } from 'next/navigation';

import logoImage from '@/assets/images/logo.svg';

import { siteName, titleMerge } from '@/config/seo.config';

import { onlyText } from '../string/clearText';

import { ISeo } from './meta.interface';

const generateMetadata = async ({
	title,
	description,
	image,
}: ISeo): Promise<Metadata> => {
	const asPath = usePathname();
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return {
		title: titleMerge(title),
		description: description ? onlyText(description, 152) : undefined,
		openGraph: {
			title: titleMerge(title),
			description: description ? onlyText(description, 197) : undefined,
			url: currentUrl,
			siteName: siteName,
			images: [
				{
					url: image || logoImage,
					alt: title,
				},
			],
		},
		robots: description ? 'index, follow' : 'noindex, nofollow',
	};
};

export default generateMetadata;
