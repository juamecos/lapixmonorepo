//this component is used to create input fields in the app and is used in the login and register screens of the app
// will use a custom validation function to validate the input fields and will use the useState hook to store the input values
'use client';
import React, { useState } from 'react';

import InputProps from './InputProps';

import styles from './Input.module.scss';

import Text from '../Text';
import Icon from '../Icon';

/**
 * Renders an input component with optional label, error message, and customizable styles.
 *
 * @param label - (string) - Optional label for the input.
 * @param value - (string) - Value of the input.
 * @param onChangeText - (event: React.ChangeEvent<HTMLInputElement>) => void) - Function to handle text changes in the input.
 * @param placeholder - (string) - Placeholder text for the input.
 * @param secureTextEntry - (boolean) - Determines if the input should be masked for password entry.
 * @param keyboardType - (string) - Type of keyboard to be displayed for the input.
 * @param autoCapitalize - (string) - Auto-capitalization behavior for the input.
 * @param autoCorrect - (boolean) - Determines if auto-correction should be enabled for the input.
 * @param containerStyle - (React.CSSProperties) - Additional styles for the container of the input component.
 * @param inputStyle - (React.CSSProperties) - Additional styles for the input element.
 * @param labelStyle - (React.CSSProperties) - Additional styles for the label element.
 * @param error - (string) - Error message to be displayed for the input.
 * @param errorStyle - (React.CSSProperties) - Additional styles for the error message.
 * @param rightIcon - (keyof typeof Icon) - Optional right icon for the input.
 * @param leftIcon - (keyof typeof Icon) - Optional left icon for the input.
 * @returns - (React.ReactNode) - The rendered input component.
 */

//TODO add the right icon to the input field

export default function Input({
	label,
	value,
	onChangeText,
	placeholder,
	secureTextEntry,
	keyboardType,
	autoCapitalize,
	autoCorrect,
	containerStyle,
	inputStyle,
	labelStyle,
	error,
	errorStyle,
	leftIcon,
	rightIcon,
	...props
}: InputProps) {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);

	const handleBlur = () => setIsFocused(false);

	const labelClassName = [
		styles.label,
		isFocused && styles.focusedLabel,
		error && styles.errorLabel,
	].join(' ');

	const renderLabel = () => {
		if (label) {
			return (
				<Text
					p
					bold
					title={label}
					textClassName={labelClassName}
					style={labelStyle}
				/>
			);
		}

		return null;
	};

	const renderError = () => {
		if (error) {
			return <Text p title={error} style={errorStyle} />;
		}

		return null;
	};

	const inputClassName = [
		styles.input,
		isFocused && styles.focusedInput,
		error && styles.errorInput,
	].join(' ');

	return (
		<div style={containerStyle}>
			{renderLabel()}
			<div className={styles.inputContainer}>
				{leftIcon && (
					<div className={styles.leftIcon}>
						<Icon name={leftIcon} />
					</div>
				)}
				<input
					className={inputClassName}
					value={value}
					onChange={onChangeText}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder={placeholder}
					type={secureTextEntry ? 'password' : 'text'}
					style={inputStyle}
					{...props}
				/>
				{rightIcon && (
					<div className={styles.rightIcon}>
						<Icon name={rightIcon} />
					</div>
				)}
			</div>
			{renderError()}
		</div>
	);
}
