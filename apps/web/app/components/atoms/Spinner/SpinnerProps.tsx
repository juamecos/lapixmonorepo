type SpinnerSize = 'small' | 'medium' | 'large';
type SpinnerDisplay = 'inline' | 'block';

export default interface SpinnerProps {
	size: SpinnerSize;
	color?: string;
	display: SpinnerDisplay;
}

export const SpinnerDefaultProps: Partial<SpinnerProps> = {
	size: 'medium',
	color: '#FF5A5F',
	display: 'block',
  };


