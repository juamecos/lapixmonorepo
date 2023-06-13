import React, { memo, useCallback } from 'react';

import Text from '../Text';

import ButtonProps from './ButtonProps';

import styles from './Button.module.scss';

import Spinner from '../Spinner/Spinner';

import Icon from '../Icon';

function Button({
	title,
	rounded,
	type = 'solid',
	variant = 'primary',
	icon,
	iconPosition = 'left',
	loading,
	onClick,
	disabled,
	buttonStyle,
	containerStyle,
	textStyle,
	iconStyle,
	iconContainerStyle,
	disabledStyle,
	disabledTextStyle,
}: ButtonProps) {
	const renderIcon = useCallback(() => {
		if (icon) {
			const iconPositionMargin = {
				...(iconPosition === 'left' && { marginRight: '1rem' }),
				...(iconPosition === 'right' && { marginLeft: '1rem' }),
				...(!title && { marginRight: '0' }),
			};
			return (
				<div
					className='icon-container'
					style={{
						...iconContainerStyle,
						...iconPositionMargin,
					}}
				>
					<Icon
						name={icon.name}
						size={(icon.size = 'small')}
						color={'inherit'}
						style={{
							...{
								height: '1.5em',
								width: '1.5em',
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex',
							},
							...iconStyle,
							...icon.style,
						}}
					/>
				</div>
			);
		}

		return null;
	}, [icon, iconPosition, iconContainerStyle, iconStyle, title]);

	const renderText = useCallback(() => {
		if (title) {
			return (
				<Text
					p
					title={title}
					style={{
						...textStyle,
						...disabledTextStyle,
					}}
				/>
			);
		}
	}, [title, textStyle, disabledTextStyle]);

	const renderLoadingIndicator = useCallback(() => {
		if (loading) {
			return (
				<>
					<Spinner
						color='#ffffff'
						size='small'
						addedStyles={{ marginRight: '1rem' }}
					/>
					<Text p title='Loading ...' />
				</>
			);
		}
		return null;
	}, [loading]);

	// Create a button class name with the type of button and disabled state
	const buttonClassName = [
		styles.button,
		styles[type],
		styles[variant],
		styles[iconPosition],
		disabled ? styles.disabled : null,
		rounded ? styles.rounded : null,
		icon ? styles.icon : null,
		loading ? styles.loading : null,
	].join(' ');

	// Create a button style with the button style and disabled style if disabled
	const buttonStyles = {
		...buttonStyle,
		...(disabled ? disabledStyle : null),
	};

	// Create a text style with the text style and disabled text style if disabled
	const textStyles = {
		...textStyle,
		...(disabled ? disabledTextStyle : null),
	};

	return (
		<div
			style={{
				...containerStyle,
			}}
		>
			<button
				onClick={onClick}
				disabled={disabled}
				className={buttonClassName}
				style={buttonStyles}
				aria-label={title}
				aria-disabled={disabled ? true : false}
			>
				{!loading && renderIcon()}
				{loading ? renderLoadingIndicator() : renderText()}
			</button>
		</div>
	);
}

export default memo(Button);
