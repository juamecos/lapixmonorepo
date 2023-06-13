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

export interface HomeProps {}

export default function Home() {
	return (
		<RootLayout>
			<main>
				<Container>
					<Card></Card>
				</Container>
			</main>
		</RootLayout>
	);
}
