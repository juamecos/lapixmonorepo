// This file contains the validation schema for the form fields
// This is used by the useForm hook to validate the form fields
// This is also used by the Form component to display the error messages

export type ValidationRule = {
	name: string,
	message: string,
	validate: (inputValue: string, formObj: Record<string, any>) => boolean,
};

/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */
function createValidationRule(
	ruleName: string,
	errorMessage: string,
	validateFunc: (inputValue: string, formObj: Record<string, any>) => boolean,
): ValidationRule {
	return {
		name: ruleName,
		message: errorMessage,
		validate: validateFunc,
	};
}

export function requiredRule(inputName: string): ValidationRule {
	return createValidationRule(
		'required',
		`${inputName} is required`,
		(inputValue: string) => inputValue.length !== 0,
	);
}

export function minLengthRule(
	inputName: string,
	minCharacters: number,
): ValidationRule {
	return createValidationRule(
		'minLength',
		`${inputName} should contain at least ${minCharacters} characters`,
		(inputValue: string) => inputValue.length >= minCharacters,
	);
}

export function maxLengthRule(
	inputName: string,
	maxCharacters: number,
): ValidationRule {
	return createValidationRule(
		'maxLength',
		`${inputName} cannot contain more than ${maxCharacters} characters`,
		(inputValue: string) => inputValue.length <= maxCharacters,
	);
}

export function passwordMatchRule() {
	return createValidationRule(
		'passwordMatch',
		`Passwords do not match`,
		(inputValue: string, formObj: Record<string, any>) =>
			inputValue === formObj.password.value,
	);
}

export function emailFormatRule() {
	return createValidationRule(
		'email',
		`Invalid email format`,
		(inputValue: string) =>
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValue),
	);
}

export function passwordFormatRule(inputName: string) {
	return createValidationRule(
		inputName,
		`Invalid password format. The password must be at least 8 characters long and contain at least one uppercase letter and one number.`,
		(inputValue: string) =>
			/^(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}$/i.test(inputValue),
	);
}
