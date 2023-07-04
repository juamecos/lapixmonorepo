'use client';

import SignupForm from 'apps/web/app/components/organisms/SignupForm';

/* eslint-disable-next-line */
export interface SignupPageProps {}

export default function SignupPage(props: SignupPageProps) {
	return (
		<main className='container'>
			<SignupForm />
		</main>
	);
}
