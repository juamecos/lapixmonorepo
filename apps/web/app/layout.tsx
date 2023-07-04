import MenuDesktop from './components/molecules/MenuDesktop';
import MenuMobile from './components/molecules/MenuMobile';
import './global.scss';
import { Inter } from 'next/font/google';

import IconProps from './components/atoms/Icon/IconProps';
import { icons } from 'libs/shared/src/constants/icons';
import Menu from './components/organisms/Menu';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata = {
	title: 'Lapixgame',
	description: 'Lapixgame',
	image: '',
	url: 'https://lapixgame.com',
};

export type linksType = {
	text: string,
	icon: IconProps['name'],
	link: string,
	login: boolean,
}[];

export const links: linksType = [
	{ text: 'Home', icon: icons.home, link: '#', login: false },
	{ text: 'Favorites', icon: icons.favorites, link: '#', login: false },
	{ text: 'Add', icon: icons.add, link: '#', login: true },
	{ text: 'Notifications', icon: icons.notifications, link: '#', login: true },
	{ text: 'Profile', icon: icons.profile, link: '#', login: false },
];

const loggedIn = true;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='description' content={metadata.description} />
				<meta name='image' content={metadata.image} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />

				<meta property='og:url' content={metadata.url} />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={metadata.title} />
				<meta property='og:description' content={metadata.description} />
				<meta property='og:image' content={metadata.image} />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={metadata.title} />
				<meta name='twitter:description' content={metadata.description} />
				<meta name='twitter:image' content={metadata.image} />
			</head>

			<body>
				<Menu links={links} loggedIn={loggedIn} />

				{children}
			</body>
		</html>
	);
}
