// This custom hook
/*
In this example, the useForm hook takes two arguments: initialState, which is an object representing the initial state of the form data, and validate, which is a function that takes the form data as an argument and returns an object representing any validation errors.
The hook returns an object containing the form data, validation errors, and functions for handling changes and submission. The handleChange function updates the form data state whenever a form input changes, and the handleSubmit function validates the form data and sets the validation errors state before handling form submission.
*/

// Path: libs\shared\src\hooks\useForm.tsx

import React from 'react';
import { ValidationRule } from '../utils';

import { RenderInputFunction } from '../../../../apps/web/app/utils/createFormInputConfig';

export type InputObj = {
	validationRules: ValidationRule[], // Make sure this property is included
	value: string,
	label: string,
	errorMessage: string,
	valid: boolean,
	touched: boolean,
	renderInput: RenderInputFunction,
};

export type RenderFormInputsFunction = () => React.ReactNode[];

/**
 * Custom hook for managing form state and validation.
 *
 * @param formObj - An object containing input field configurations.
 * @returns An object with functions to render form inputs and check form validity.
 */

export default function useForm(formObj: { [key: string]: InputObj }) {
	const [form, setForm] = React.useState(formObj);

	/**
	 * Renders the form inputs based on the provided form configuration.
	 *
	 * @returns An array of rendered form inputs.
	 */

	function renderFormInputs() {
		return Object.values(form).map(inputObj => {
			const { value, label, errorMessage, valid, renderInput } = inputObj;
			return renderInput(handleChange, value, valid, errorMessage, label);
		});
	}

	/**
	 * Checks if an input field is valid based on its validation rules.
	 *
	 * @param inputField - The input field object containing validation rules, value, and error message.
	 * @returns A boolean indicating if the input field is valid.
	 */

	const isInputFieldValid = React.useCallback(
		(inputField: { validationRules: any, value: any, errorMessage: any }) => {
			for (const rule of inputField.validationRules) {
				if (!rule.validate(inputField.value, form)) {
					inputField.errorMessage = rule.message;
					return false;
				}
			}

			return true;
		},
		[form],
	);

	/**
	 * Handles the change event for form inputs.
	 *
	 * @param event - The change event.
	 */

	const handleChange = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			// copy input object whose value was changed
			const inputObj = { ...form[name] };
			// update value
			inputObj.value = value;

			// update input field's validity
			const isValidInput = isInputFieldValid(inputObj);
			// if input is valid and it was previously invalid
			// set its valid status to true
			if (isValidInput && !inputObj.valid) {
				inputObj.valid = true;
			} else if (!isValidInput && inputObj.valid) {
				// if input is not valid and it was previously valid
				// set its valid status to false
				inputObj.valid = false;
			}

			// mark input field as touched
			inputObj.touched = true;
			setForm({ ...form, [name]: inputObj });
		},
		[form, isInputFieldValid],
	);

	/**
	 * Checks if the entire form is valid.
	 *
	 * @returns A boolean indicating if the form is valid.
	 */

	const isFormValid = React.useCallback(() => {
		const fields = Object.values(form);
		return fields.every(field => field.valid);
	}, [form]);

	/**
	 * Gets the form data containing the current values of the inputs.
	 *
	 * @returns The form data object.
	 */
	const getFormData = React.useCallback(() => {
		const formData: { [key: string]: any } = {};
		Object.entries(form).forEach(([name, inputObj]) => {
			formData[name] = inputObj.value;
		});
		return formData;
	}, [form]);

	return { renderFormInputs, isFormValid, getFormData };
}
