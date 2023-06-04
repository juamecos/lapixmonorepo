// props
type AvatarSize = 'small' | 'medium' | 'large' | 'huge';

interface AvatarProps {
	size?: AvatarSize;
	rounded?: boolean;
	source?: string;
	title: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

export default AvatarProps;
