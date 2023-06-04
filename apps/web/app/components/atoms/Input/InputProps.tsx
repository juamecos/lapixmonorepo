// This file is for the props of the Input component

// import Icon Props
import Icon from '../Icon';



export default interface InputProps {
  label?: string;
  value?: string;
  onChangeText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  error?: string;
  errorStyle?: React.CSSProperties;
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
} 

