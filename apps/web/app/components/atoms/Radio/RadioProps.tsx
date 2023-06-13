import { VariantType } from '@lapix/shared';
export default interface CheckboxProps {
	/** Title od checkbox */
	title: string;
	/** Size of checkbox */
	size?: 'small' | 'medium' | 'large';
	/** Variant of checkbox */
	variant?: VariantType;
	/** If checkbox is checked */
	checked?: boolean;
	/** If checkbox is disabled */
	disabled?: boolean;
	/** Function called when checkbox is clicked */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
