import React, { FC } from 'react';

export type ButtonProps = {
  label: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  label,
  type,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className={className}
    >
      {label}
    </button>
  );
};
