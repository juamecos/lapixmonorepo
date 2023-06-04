// This component is used to render icons in the application.
// usin react-icons library to render icons in the application.
//  * @param {IconProps} props
//  * @returns {JSX.Element}
//  */

import React from 'react';
import IonIcon from '@reacticons/ionicons/lib/IonIcon';

import IconProps from './IconProps';

export default function Icon({
	name,
	size = 'small',
	color = '#000000',
	style,
}: IconProps) {
	return (
		<IonIcon
			name={name}
			size={size}
			style={{ ...style, color: color || undefined }}
		/>
	);
}
