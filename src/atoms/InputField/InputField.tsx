import React, { FC } from 'react';
import { withOptionalClass } from '../../utils/stringUtils';
import './InputField.scss';

export type InputType = 'text' | 'number' | 'password' | 'tel' | 'email';

export type InputFieldProps = {
  value: string;
  type?: InputType;
  onChange?: (input: string) => void;
  placeholder?: string;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

export const InputField: FC<InputFieldProps> = ({
  value,
  type = 'text',
  onChange,
  placeholder,
  success,
  error,
  disabled,
  required,
  className,
}) => {
  return (
    <input
      value={value}
      type={type}
      onChange={e => onChange?.(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={withOptionalClass('input-field', [
        {
          className: 'success',
          condition: !!success,
        },
        {
          className: 'error',
          condition: !!error,
        },
        {
          className: className ?? '',
          condition: !!className?.length,
        },
      ])}
    />
  );
};
