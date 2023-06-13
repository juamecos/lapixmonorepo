import Link from 'next/link';
import styles from './index.module.scss';
import Button from 'apps/web/app/components/atoms/Button/Button';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
	return (
		<main className='container'>
			<h1 className='container__welcome'>Welcome to Login!</h1>
			<Link href='/'>
				<Button title='Home' type='solid' variant='primary' />
			</Link>
		</main>
	);
}

export default Login;
