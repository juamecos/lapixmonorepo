'use client';
import React from 'react';
import RootLayout from './layout';
import './page.module.scss';

import Container from './components/atoms/Container';

import Card from './components/molecules/Card';

import FAB from './components/atoms/FAB/FAB';

export interface HomeProps {}

// Moc data for testing card component
type ImageData = {
	imageUrl: string,
	alt: string,
};

const data: ImageData[] = [];

for (let i = 0; i < 50; i++) {
	const randomId = Math.floor(Math.random() * 247) + 1; // Generate a random ID between 1 and 247
	const imageUrl = `https://picsum.photos/id/${randomId}/200/300`; // Use the random ID in the image URL
	const alt = `Image ${i + 1}`; // Generate alt text

	data.push({ imageUrl, alt });
}

const login = false;

export default function Home() {
	return (
		<>
			<main>
				<Container>
					{data.map((item, index) => {
						return <Card key={index} imageUrl={item.imageUrl} alt={item.alt} />;
					})}
				</Container>
				<FAB
					title='Map'
					icon={{ name: 'map-outline' }}
					type='solid'
					variant='secondary'
					href={login ? '/map' : '/login'}
				/>
			</main>
		</>
	);
}
