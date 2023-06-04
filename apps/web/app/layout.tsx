import './global.scss';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata = {
	title: 'Lapixgame',
	description: 'Lapixgame',
	image: '',
	url: 'https://lapixgame.com',
};

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

			<body>{children}</body>
		</html>
	);
}
