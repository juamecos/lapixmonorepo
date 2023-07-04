import React from "react";
import { TextProps as CustomTextProps } from "../Text/TextProps";
import { VariantType } from '@lapix/shared';
import Icon from "../Icon";




export default interface ButtonProps {
  title?: string;
  rounded?: boolean;
  type: 'solid' | 'outline' | 'clear';
  variant: VariantType;
  icon?: typeof Icon;
	iconStyle?: React.CSSProperties
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  loading?: boolean;
  onClick?: (() => void) | ((values: Record<string, any>) => void);
  disabled?: boolean;
  buttonStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  iconContainerStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
  disabledTextStyle?: React.CSSProperties;
}
