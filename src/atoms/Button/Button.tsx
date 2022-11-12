import React, { FC } from 'react';
import { createClassName } from '../../utils/stringUtils';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Button: FC<ButtonProps> = ({
  label,
  variant = 'primary',
  type,
  onClick,
  disabled,
  className,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className={createClassName(`btn-${variant}`, className)}
      style={style}
    >
      {label}
    </button>
  );
};
