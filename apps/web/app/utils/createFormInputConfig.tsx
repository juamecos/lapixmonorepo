import { ReactNode } from 'react';
import Input from '../components/atoms/Input';
import InputProps from '../components/atoms/Input/InputProps';
import Icon from '../components/atoms/Icon';
import { IconName } from '../components/atoms/Icon/IconProps';
import { ValidationRule } from 'libs/shared/src/utils/validation';

/**
 * Configuration options for the form input.
 */
export type FormInputConfigOptions = {
	/**
	 * Optional label for the input.
	 */
	label: string;
	/**
	 * Name of the input.
	 */
	name: string;
	/**
	 * Default value for the input.
	 */
	defaultValue?: string;
	/**
	 * Placeholder for the input.
	 */
	placeholder?: string;
	/**
	 * Type of the input.
	 */
	type?: HTMLInputElement['type'];
	/**
	 * Type of keyboard to be displayed for the input.
	 */
	keyboardType?: string;
	/**
	 * Auto-capitalization behavior for the input.
	 */
	autoCapitalize?: string;
	/**
	 * Determines if auto-correction should be enabled for the input.
	 */
	autoCorrect?: boolean;
	/**
	 * Additional styles for the container of the input component.
	 */
	containerStyle?: React.CSSProperties;
	/**
	 * Additional styles for the input element.
	 */
	inputStyle?: React.CSSProperties;
	/**
	 * Additional styles for the label element.
	 */
	labelStyle?: React.CSSProperties;
	/**
	 * Additional styles for the error message.
	 */
	errorStyle?: React.CSSProperties;
	/**
	 * Optional right icon for the input.
	 */
	rightIcon?: keyof typeof Icon;
	/**
	 * Optional left icon for the input.
	 */
	leftIcon?: IconName;
  };
  
  /**
   * Function signature for the renderInput function.
   */
  export type RenderInputFunction = (
	handleChange: InputProps['onChangeText'],
	value: InputProps['value'],
	isValid: boolean,
	error: string,
	key: string,
  ) => ReactNode;
  
  /**
   * Configuration object for the form input.
   */
  export type FormInputConfig = Omit<InputProps, 'onChangeText'> & {
	/**
	 * Function that renders the input component.
	 */
	renderInput: RenderInputFunction;
	/**
	 * Indicates whether the input is valid.
	 */
	valid: boolean;
	/**
	 * Error message associated with the input.
	 */
	error: string;
	/**
	 * Indicates whether the input has been touched.
	 */
	touched: boolean;
  };

  export type FormType = Record<string, { validationRules: ValidationRule[] } & FormInputConfig>
  
  /**
   * Creates a form input configuration object.
   * @param options - Configuration options for the form input.
   * @returns The form input configuration object.
   */
export default function createFormInputConfig(options: FormInputConfigOptions): FormInputConfig {
  const {
    label,
    name,
    defaultValue = '',
    placeholder,
    type,
    keyboardType = 'default',
    autoCapitalize = 'none',
    autoCorrect = false,
    containerStyle,
    inputStyle,
    labelStyle,
    errorStyle,
    leftIcon,
    rightIcon,
  } = options;

  return {
    renderInput: (
      handleChange: InputProps['onChangeText'],
      value: InputProps['value'],
      isValid: boolean,
      error: string,
      key: string,
    ) => {
      return (
        <Input
          key={key}
          label={label}
          name={name}
          value={value}
          onChangeText={handleChange}
          placeholder={placeholder}
          type={type}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          errorStyle={errorStyle}
          errorMessage={error}
          isValid={isValid}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    error: '',
    touched: false,
  };
}
