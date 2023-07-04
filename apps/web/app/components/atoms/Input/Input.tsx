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
 * @param name - (string) - Name of the input.
 * @param value - (string) - Value of the input.
 * @param onChangeText - (event: React.ChangeEvent<HTMLInputElement>) => void) - Function to handle text changes in the input.
 * @param placeholder - (string) - Placeholder text for the input.
 * @param type - (boolean) - Type of input.
 * @param keyboardType - (string) - Type of keyboard to be displayed for the input.
 * @param autoCapitalize - (string) - Auto-capitalization behavior for the input.
 * @param autoCorrect - (boolean) - Determines if auto-correction should be enabled for the input.
 * @param containerStyle - (React.CSSProperties) - Additional styles for the container of the input component.
 * @param inputStyle - (React.CSSProperties) - Additional styles for the input element.
 * @param labelStyle - (React.CSSProperties) - Additional styles for the label element.
 * @param errorMessage - (string) - Error message to be displayed for the input.
 * @param errorStyle - (React.CSSProperties) - Additional styles for the error message.
 * @param rightIcon - (keyof typeof Icon) - Optional right icon for the input.
 * @param leftIcon - (keyof typeof Icon) - Optional left icon for the input.
 * @returns - (React.ReactNode) - The rendered input component.
 */

export default function Input({
	label,
	name,
	value,
	onChangeText,
	placeholder,
	type,
	keyboardType,
	autoCapitalize,
	autoCorrect,
	containerStyle,
	inputStyle,
	labelStyle,
	errorMessage,
	errorStyle,
	isValid,
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
		errorMessage && styles.errorLabel,
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
		if (errorMessage && !isValid) {
			return <Text p title={errorMessage} style={errorStyle} textColor='red' />;
		}

		return null;
	};

	const inputContainerClassName = [
		styles.inputContainer,
		isFocused && styles.focus,
		errorMessage && styles.error,
		isValid && styles.valid,
	].join(' ');

	return (
		<div data-id={`input-${name}`} style={containerStyle}>
			{renderLabel()}
			<div className={inputContainerClassName}>
				{leftIcon && (
					<div className={styles.leftIcon}>
						<Icon
							name={leftIcon}
							size='large'
							color='inherited'
							style={{ fontSize: '1.1rem' }}
						/>
					</div>
				)}
				<input
					className={styles.input}
					value={value}
					name={name}
					onChange={onChangeText}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder={placeholder}
					type={type}
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

// Create an Input component to be used with React Form Hook y la validación de path: libs\shared\src\utils\validation.ts
