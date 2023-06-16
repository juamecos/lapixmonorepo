'use client';
import React from 'react';
import RootLayout from './layout';
import './page.module.scss';

import Text from './components/atoms/Text/Text';
import Avatar from './components/atoms/Avatar/Avatar';
import Spinner from './components/atoms/Spinner/Spinner';
import Button from './components/atoms/Button/Button';
import Icon from './components/atoms/Icon';
import Input from './components/atoms/Input/Input';
import Container from './components/atoms/Container';
import Link from 'next/link';
import Checkbox from './components/atoms/Checkbox/Checkbox';
import Radio from './components/atoms/Radio';
import Skeleton from './components/atoms/Skeleton';
import Card from './components/molecules/Card';
import ImageBackground from './components/atoms/ImageBackground';

export interface HomeProps {}

// Moc data for testing card component
const data = [
	{ imageUrl: 'https://picsum.photos/id/237/200/300', alt: 'dog' },
	{ imageUrl: 'https://picsum.photos/id/238/200/300', alt: 'new york' },
	{ imageUrl: 'https://picsum.photos/id/239/200/300', alt: 'pampeliska' },
	{ imageUrl: 'https://picsum.photos/id/240/200/300', alt: 'wall' },
	{ imageUrl: 'https://picsum.photos/id/241/200/300', alt: 'fence' },
	{ imageUrl: 'https://picsum.photos/id/242/200/300', alt: 'railway' },
	{ imageUrl: 'https://picsum.photos/id/243/200/300', alt: 'tree' },
	{ imageUrl: 'https://picsum.photos/id/254/200/300', alt: 'forest' },
	{ imageUrl: 'https://picsum.photos/id/244/200/300', alt: 'dock' },
	{ imageUrl: 'https://picsum.photos/id/232/200/300', alt: 'light' },
	{ imageUrl: 'https://picsum.photos/id/247/200/300', alt: 'desert' },
];

export default function Home() {
	return (
		<RootLayout>
			<main>
				<Container>
					{data.map((item, index) => {
						return <Card key={index} imageUrl={item.imageUrl} alt={item.alt} />;
					})}
				</Container>
			</main>
		</RootLayout>
	);
}
