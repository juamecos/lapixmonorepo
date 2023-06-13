import React from "react";
import { TextProps as CustomTextProps } from "../Text/TextProps";
import { VariantType } from '@lapix/shared';
import IconProps from "../Icon/IconProps";




export default interface ButtonProps {
  title?: string;
  rounded?: boolean;
  type: 'solid' | 'outline' | 'clear';
  variant: VariantType;
  icon?: IconProps;
	iconStyle?: React.CSSProperties
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  buttonStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  iconContainerStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
  disabledTextStyle?: React.CSSProperties;
}
