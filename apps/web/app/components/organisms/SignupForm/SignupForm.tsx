import React from 'react';
import styles from './SignupForm.module.scss';
import SignupFormProps from './SignupFormProps';

import useForm from 'libs/shared/src/hooks/useForm';
import createFormInputConfig from 'apps/web/app/utils/createFormInputConfig';
import Button from '../../atoms/Button/Button';

import {
	requiredRule,
	minLengthRule,
	maxLengthRule,
	emailFormatRule,
	passwordFormatRule,
	passwordMatchRule,
} from 'libs/shared/src/utils/validation';

import { icons } from 'libs/shared/src/constants/icons';
import Link from 'next/link';

export const signupForm = {
	userName: {
		...createFormInputConfig({
			label: 'User Name',
			name: 'userName',
			defaultValue: '',
			placeholder: '',
			leftIcon: icons.user,
		}),
		validationRules: [
			requiredRule('userName'),
			minLengthRule('password', 8),
			maxLengthRule('password', 20),
		],
	},
	email: {
		...createFormInputConfig({
			label: 'Email',
			name: 'email',
			defaultValue: '@',
			keyboardType: 'email-address',
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
			type: 'password',
			leftIcon: icons.password,
		}),
		validationRules: [
			requiredRule('password'),
			minLengthRule('password', 8),
			maxLengthRule('password', 20),
			passwordFormatRule('password'),
		],
	},
	confirmPassword: {
		...createFormInputConfig({
			label: 'Confirm Password',
			name: 'confirmPassword',
			defaultValue: '',
			type: 'password',
			leftIcon: icons.confirm,
		}),
		validationRules: [passwordMatchRule()],
	},
};

export default function SignupForm() {
	const { renderFormInputs, isFormValid, getFormData } = useForm(signupForm);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = getFormData();
		const isValid = isFormValid();
		console.log('Form data:', formData);
		console.log('Is form valid?', isValid);
	};

	return (
		<div className='formContainer'>
			<form onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
				{renderFormInputs()}
				<Button
					title='Submit'
					type='solid'
					variant='primary'
					disabled={!isFormValid()}
				/>

				<Link href='/login'>
					<Button
						title='I already have an account'
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
