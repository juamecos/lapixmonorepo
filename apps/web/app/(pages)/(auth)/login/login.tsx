import LoginForm from 'apps/web/app/components/organisms/LoginForm';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
	return (
		<main className='container'>
			<LoginForm />
		</main>
	);
}
