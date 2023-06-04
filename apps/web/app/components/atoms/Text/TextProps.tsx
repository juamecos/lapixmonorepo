export interface TextProps {
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	p?: boolean;
	bold?: boolean;
	italic?: boolean;
	title: string;
	textColor?: string;
	textClassName?: string; // to override styles from Text.module.scss file with custom styles
	style?: React.CSSProperties;
	// Puedes agregar más propiedades según tus necesidades
}
