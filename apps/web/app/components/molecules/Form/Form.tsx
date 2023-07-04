'use client';
import React, { useCallback, useRef, useReducer, ChangeEvent } from 'react';
import styles from './Form.module.scss';
import FormProps from './FormProps';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

export default function Form({
	initialValues,
	validationSchema,
	onSubmit,
	children,
}: FormProps) {
	const reducer = (
		state: typeof initialValues,
		payload: { field: string, value: string },
	) => {
		return { ...state, [payload.field]: payload.value };
	};

	const [state, dispatch] = useReducer(reducer, initialValues);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	// Create a OnSubmit function with useCallback
	const onSubmitHandler = useCallback((values: Record<string, any>) => {
		console.log(values);
	}, []);

	// formRef.current?.addEventListener('submit', (e) => {
	//   e.preventDefault();
	//   const formData = new FormData(formRef?.current as HTMLFormElement);
	//   const values = Object.fromEntries(formData.getAll);
	//   onSubmitHandler(values);
	// });

	return (
		<form className={styles.form}>
			<Input
				label='Email'
				value={state.email}
				placeholder='Email'
				onChangeText={handleChange}
			/>
			{children}
			<Button
				title='Submit'
				type='solid'
				variant='primary'
				onClick={onSubmit}
			/>
		</form>
	);
}
