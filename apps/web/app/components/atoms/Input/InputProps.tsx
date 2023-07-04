
// // import Icon Props
import Icon from '../Icon';
import { IconName } from '../Icon/IconProps';



export default interface InputProps {
  label?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  keyboardType?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  errorMessage?: string;
  errorStyle?: React.CSSProperties;
  isValid?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
} 

