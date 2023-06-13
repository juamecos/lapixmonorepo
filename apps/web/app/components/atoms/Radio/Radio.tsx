'use client';
import React, { useState } from 'react';

import RadioProps from './RadioProps';

import styles from './Radio.module.scss';
import classnames from 'classnames';
import Text from '../Text/Text';
export default function Radio({
	title,
	size = 'medium',
	variant = 'primary',
	checked = false,
	disabled = false,
	onChange,
}: RadioProps) {
	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked);
	};

	const labelClassNames = classnames(
		styles.formControl,
		styles[size],
		styles[variant],
		{
			[styles.disabled]: disabled,
		},
	);

	return (
		<label className={labelClassNames}>
			<input
				type='radio'
				className={styles.input}
				onChange={handleOnChange}
				disabled={disabled}
				checked={isChecked}
				aria-checked={isChecked}
				aria-disabled={disabled}
			/>
			<Text p title={title} />
		</label>
	);
}
