import IonIcon from '@reacticons/ionicons/lib/IonIcon';

import IconProps from './IconProps';

// TSdoc

/**
 * Icon component for displaying icons from Ionicons library with custom color and size support.
 *
 * @param name - required - Name of the icon to be displayed.
 * @param size - Size of the icon to be displayed.
 * @param color - Color of the icon to be displayed.
 * @param style - External styles to be applied to the component.
 * @param arialabel - Aria label for the icon.
 * @returns {JSX.Element}
 * @example
 * <Icon name='save' size='large' color='blue' />
 *
 * @see https://ionicons.com/
 *
 */

export default function Icon({
	name,
	size = 'small',
	color = '#000000',
	style,
	arialabel,
	onClick,
}: IconProps) {
	return (
		<IonIcon
			className='icon'
			name={name}
			size={size}
			style={{ ...style, color: color || undefined }}
			aria-label={arialabel}
			onClick={onClick}
		/>
	);
}
