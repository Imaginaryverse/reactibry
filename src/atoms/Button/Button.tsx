import React, { FC } from 'react';
import { createClassName } from '../../utils/stringUtils';
import './Button.scss';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Button: FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  onClick,
  disabled = false,
  className,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className={createClassName(`btn-${variant} ${size}`, className)}
      style={style}
    >
      {label}
    </button>
  );
};
