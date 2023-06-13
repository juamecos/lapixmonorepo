import React from 'react';
import SpinnerProps from './SpinnerProps';
import styles from './Spinner.module.scss';

/**
 * Spinner component for indicating loading state. It can be used in any component.
 * @param addedStyles - External styles to be applied to the component.
 * @param color - Color of the spinner.
 * @param display - Display of the spinner.
 * @param size - Size of the spinner.
 * @returns {JSX.Element}
 * @example
 * <Spinner size='small' color='red' display='block' addedStyles={{margin: '10px'}}/>
 *
 */

export default function Spinner({
	size = 'small',
	color,
	display,
	addedStyles, // esternal styles
}: SpinnerProps) {
	const spinnerStyles = [styles.spinner, styles[size]].join(' ');

	return (
		<div
			className={spinnerStyles}
			style={{
				borderTopColor: color,
				display: display,
				...addedStyles,
			}}
			role='status'
			aria-live='assertive'
			aria-label='Loading'
		/>
	);
}
