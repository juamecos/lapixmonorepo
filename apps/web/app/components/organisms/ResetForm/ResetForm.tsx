'use client';
import React from 'react';

import useForm from 'libs/shared/src/hooks/useForm';
import createFormInputConfig from 'apps/web/app/utils/createFormInputConfig';
import Button from '../../atoms/Button/Button';

import {
	requiredRule,
	emailFormatRule,
	minLengthRule,
	maxLengthRule,
} from 'libs/shared/src/utils/validation';

import Link from 'next/link';

import { icons } from 'libs/shared/src/constants/icons';

// object representation of reset form

export const resetForm = {
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
};

export default function ResetForm() {
	const { renderFormInputs, isFormValid, getFormData } = useForm(resetForm);

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
				<h1>Reset Password</h1>
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
				<Link href='/login'>
					<Button title='Login' type='clear' variant='info' />
				</Link>
			</form>
		</div>
	);
}
