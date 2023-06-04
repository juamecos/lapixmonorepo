import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
	return (
		<main className='container'>
			<h1 className='container__welcome'>Welcome to Login!</h1>
		</main>
	);
}

export default Login;
