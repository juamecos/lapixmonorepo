import React, { memo, useCallback } from 'react';

import Text from '../Text';

import ButtonProps from './ButtonProps';

import styles from './Button.module.scss';

import Spinner from '../Spinner/Spinner';

import Icon from '../Icon';
// TSDocs stating if required
/**
 * Button component for the application that can be used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @param title - The title of the button.
 * @param rounded - If true, the button will be rounded.
 * @param type - The type of the button.
 * @param variant - The variant of the button.
 * @param icon - The icon to be displayed on the button.
 * @param iconPosition - The position of the icon on the button.
 * @param loading - If true, the button will be in loading state.
 * @param onClick - The function to be called when the button is clicked.
 * @param disabled - If true, the button will be disabled.
 * @param buttonStyle - The style of the button.
 * @param containerStyle - The style of the container.
 * @param textStyle - The style of the text.
 * @param iconStyle - The style of the icon.
 * @param iconContainerStyle - The style of the icon container.
 * @param disabledStyle - The style of the button when it is disabled.
 * @param disabledTextStyle - The style of the text when the button is disabled.
 * @returns {JSX.Element} - The button component.
 * @example
 * <Button title='Button' rounded type='solid' variant='primary' />
 */

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
								// justifyContent: 'center',
								// alignItems: 'center',
								// display: 'flex',
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
