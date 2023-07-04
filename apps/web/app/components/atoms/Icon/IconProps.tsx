// Creates a type for the Icon component props

import Ionicons  from '@reacticons/ionicons';

export type IoniconProps = typeof Ionicons;

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

export default interface IconProps {
	name: IconName;
	size?: 'small' | 'large';
	color?: React.CSSProperties['color'];
	style?: React.CSSProperties;
	onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
	arialabel?: string;
}
