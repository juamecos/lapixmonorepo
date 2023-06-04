import React from 'react';
import SpinnerProps, { SpinnerDefaultProps } from './SpinnerProps';
import styles from './Spinner.module.scss';

export default function Spinner({ size, color, display }: SpinnerProps) {
	const spinnerStyles = [styles.spinner, styles[size]];

	return (
		<div
			className={spinnerStyles.join(' ')}
			style={{ borderTopColor: color, display: display }}
			role='status'
			aria-live='assertive'
			aria-label='Loading'
		/>
	);
}

Spinner.defaultProps = SpinnerDefaultProps;
