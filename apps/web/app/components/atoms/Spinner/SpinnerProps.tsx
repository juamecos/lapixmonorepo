type SpinnerSize = 'small' | 'medium' | 'large';
type SpinnerDisplay = 'inline' | 'block';

export default interface SpinnerProps {
	size: SpinnerSize;
	color?: string;
	display?: SpinnerDisplay;
	addedStyles?: React.CSSProperties;
}




