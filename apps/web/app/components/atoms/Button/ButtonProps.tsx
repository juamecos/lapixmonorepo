import React from "react";
import { TextProps as CustomTextProps } from "../Text/TextProps";
import Icon from "../Icon";
import IconProps from "../Icon/IconProps";


export default interface ButtonProps {
  title: string;
  type?: 'solid' | 'outline' | 'clear';
  icon?: keyof typeof Icon;
  iconRight?: boolean;
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  buttonStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  iconContainerStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
  disabledTextStyle?: React.CSSProperties;
  loadingStyle?: React.CSSProperties;
  linearGradientProps?: any;
  loadingProps?: any;
  titleProps?: CustomTextProps;
}
