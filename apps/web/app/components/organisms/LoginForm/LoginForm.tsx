'use client';
import React from 'react';
import styles from './LoginForm.module.scss';

import useForm from 'libs/shared/src/hooks/useForm';
import createFormInputConfig from 'apps/web/app/utils/createFormInputConfig';
import Button from '../../atoms/Button/Button';

import {
	requiredRule,
	minLengthRule,
	maxLengthRule,
	emailFormatRule,
	passwordFormatRule,
} from 'libs/shared/src/utils/validation';
import Link from 'next/link';

import { icons } from 'libs/shared/src/constants/icons';

// object representation of login form
export const loginForm = {
	email: {
		...createFormInputConfig({
			label: 'Email',
			name: 'email',
			defaultValue: '@',
			leftIcon: icons.email,
		}),
		validationRules: [
			requiredRule('email'),
			minLengthRule('email', 10),
			maxLengthRule('email', 25),
			emailFormatRule(),
		],
	},
	password: {
		...createFormInputConfig({
			label: 'Password',
			name: 'password',
			defaultValue: '',
			leftIcon: icons.password,
		}),
		validationRules: [
			requiredRule('password'),
			minLengthRule('password', 8),
			maxLengthRule('password', 20),
			passwordFormatRule('password'),
		],
	},
};

export default function LoginForm() {
	const { renderFormInputs, isFormValid, getFormData } = useForm(loginForm);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Not implemented
		event.preventDefault();
		const formData = getFormData();
		const isValid = isFormValid();
		console.log('Form data:', formData);
		console.log('Is form valid?', isValid);
	};
	return (
		<div className='formContainer'>
			<form>
				<h1>Login</h1>
				{renderFormInputs()}
				<Button
					title='Submit'
					type={'solid'}
					variant={'primary'}
					onClick={handleSubmit}
					disabled={!isFormValid()}
				/>
				{/* Buttons for I do not have an account and forgot password */}
				<Link href='/signup'>
					<Button
						title="I don't have an account"
						type='clear'
						variant='success'
					/>
				</Link>
				<Link href='/reset'>
					<Button title='Forgot password' type='clear' variant='info' />
				</Link>
			</form>
		</div>
	);
}
