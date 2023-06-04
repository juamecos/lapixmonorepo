// Crea un componente con los props propios de texto para reutilizarlo en todo el proyecto con varias variantes de estilos.
import { TextProps as CustomTextProps } from './TextProps';
import styles from './Text.module.scss';
// import { color } from 'src/theme';

const color = {
	text: '#000000',
};
export default function Text({
	h1,
	h2,
	h3,
	h4,
	h5,
	p,
	textClassName,
	bold,
	italic,
	title,
	textColor = color.text,
	style,
	...rest
}: CustomTextProps) {
	let Element: keyof JSX.IntrinsicElements = p ? 'p' : 'span';
	if (h1) Element = 'h1';
	else if (h2) Element = 'h2';
	else if (h3) Element = 'h3';
	else if (h4) Element = 'h4';
	else if (h5) Element = 'h5';

	const textStyle = [
		styles.text,
		h1 && styles.h1,
		h2 && styles.h2,
		h3 && styles.h3,
		h4 && styles.h4,
		h5 && styles.h5,
		p && styles.p,
		bold && styles.bold,
		italic && styles.italic,
		textClassName && textClassName,
	].join(' ');

	return (
		<Element
			className={textStyle}
			style={{ color: textColor, ...style }}
			{...rest}
		>
			{title}
		</Element>
	);
}
