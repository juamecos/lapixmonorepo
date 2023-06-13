'use client';
import React, { useState } from 'react';

import CheckboxProps from './CheckboxProps';

import styles from './Checkbox.module.scss';
import classnames from 'classnames';
import Text from '../Text/Text';
export default function Checkbox({
	title,
	size = 'medium',
	variant = 'primary',
	checked = false,
	disabled = false,
	onChange,
}: CheckboxProps) {
	const [isChecked, setIsChecked] = useState(checked);

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
				type='checkbox'
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
