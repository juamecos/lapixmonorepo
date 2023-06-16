// Creates a type for the Icon component props

import Ionicons  from '@reacticons/ionicons';

export type IoniconProps = typeof Ionicons;

export default interface IconProps {
	name: React.ComponentProps<typeof Ionicons>['name'];
	size?: 'small' | 'large';
	color?: React.CSSProperties['color'];
	style?: React.CSSProperties;
	onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
	arialabel?: string;
}
