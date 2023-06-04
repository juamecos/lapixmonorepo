// import textprpos and text component
import Text from '../Text';

import ButtonProps from './ButtonProps';

import styles from './Button.module.scss';
import Spinner from '../Spinner/Spinner';

import Icon from '../Icon';

export default function Button({
	title,
	type = 'solid',
	icon,
	iconRight,
	loading,
	onClick,
	disabled,
	buttonStyle,
	containerStyle,
	textStyle,
	iconContainerStyle,
	disabledStyle,
	disabledTextStyle,
	loadingStyle,
	linearGradientProps,
	loadingProps,
	titleProps,
}: ButtonProps) {
	const renderIcon = () => {
		if (icon) {
			const iconProps = typeof icon === 'string' ? { name: icon } : icon;

			return (
				<div
					style={{
						...iconContainerStyle,
						...(iconRight && { marginLeft: 10 }),
					}}
				>
					<Icon {...iconProps} />
				</div>
			);
		}

		return null;
	};

	const renderLoadingIndicator = () => {
		if (loading) {
			return (
				<Spinner
					color='#ffffff'
					style={[styles.loadingIndicator, loadingStyle]}
					{...loadingProps}
				/>
			);
		}
		return null;
	};

	const buttonClassName = [
		styles.button,
		styles[type],
		disabled ? styles.disabled : null,
	].join(' ');

	const buttonStyles: React.CSSProperties | undefined = {
		...buttonStyle,
		...(disabled ? disabledStyle : null),
	};

	const textStyles = {
		...textStyle,
		...(disabled ? disabledTextStyle : null),
	};

	return (
		<div style={containerStyle}>
			<button onClick={onClick} disabled={disabled} {...linearGradientProps}>
				<div className={buttonClassName} style={buttonStyles}>
					{!iconRight && renderIcon()}
					{loading ? (
						renderLoadingIndicator()
					) : (
						<Text p title={title} style={textStyles} {...titleProps} />
					)}
					{iconRight && renderIcon()}
				</div>
			</button>
		</div>
	);
}
