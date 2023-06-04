import React from 'react';
import RootLayout from './layout';
import './page.module.scss';

import Text from './components/atoms/Text/Text';
import Avatar from './components/atoms/Avatar/Avatar';
import Spinner from './components/atoms/Spinner/Spinner';
import Button from './components/atoms/Button/Button';
import Icon from './components/atoms/Icon';
import Input from './components/atoms/Input/Input';

export interface HomeProps {}

export default function Home() {
	return (
		<RootLayout>
			<main className='container'>
				<Text h1 title='Heading 1' />
				<Text h2 title='Heading 2' />
				<Text h3 title='Heading 3' />
				<Text h4 title='Heading 4' />
				<Text h5 title='Heading 5' />

				<Text p title='Paragraph Text' />

				<Text bold title='Bold Text' />

				<Text italic title='Italic Text' />

				<Text h1 bold title='Heading 1 with Bold' />

				<Text h2 italic title='Heading 2 with Italic' />

				<Text
					p
					bold
					italic
					title='Paragraph Text with Bold and Italic'
					style={{ letterSpacing: 2 }}
				/>
				<Avatar rounded title='JM' />
				<Spinner />
				<Button title='Button' />

				<Icon name='save' size='large' color='blue' />
				<Icon
					name='menu'
					size='large'
					color='red'
					style={{
						padding: 10,
						borderColor: 'red',
						borderWidth: 1,
						borderStyle: 'solid',
					}}
				/>
				<Icon name='search' size='large' />
				<Icon name='add' size='large' />
				{/* Ejemplo 1 */}
				<Icon
					name={'menu'}
					size='large'
					color='red'
					style={{
						padding: 10,
						borderColor: 'red',
						borderWidth: 1,
						borderStyle: 'solid',
					}}
				/>

				{/* Ejemplo 2 */}
				<Icon name={'home'} size='small' color='blue' />

				{/* Ejemplo 3 */}
				<Icon
					name={'settings'}
					size='large'
					color='green'
					style={{ fontSize: 24 }}
				/>

				{/* Ejemplo 4 */}
				<Icon
					name={'notifications'}
					size='small'
					color='orange'
					style={{ marginLeft: 5 }}
				/>

				{/* Ejemplo 5 */}
				<Icon
					name={'search'}
					size='large'
					color='purple'
					style={{ opacity: 0.8, marginLeft: 10, fontSize: 24 }}
				/>

				<div>
					<Input
						label='Email'
						// value={email}
						// onChangeText={handleEmailChange}
						placeholder='Enter your email'
						autoCapitalize='none'
						keyboardType='email-address'
						containerStyle={{ marginBottom: 16 }}
					/>
					<Input
						label='Password'
						// value={password}
						// onChangeText={handlePasswordChange}
						placeholder='Enter your password'
						secureTextEntry={true}
						containerStyle={{ marginBottom: 24 }}
					/>
					{/* <button onClick={handleLogin}>Login</button> */}
				</div>
			</main>
		</RootLayout>
	);
}
