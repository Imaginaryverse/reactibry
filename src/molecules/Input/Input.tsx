import React, { FC } from 'react';
import { createClassName } from '../../utils/stringUtils';
import { InputErrorMessage } from '../../atoms/InputErrorMessage/InputErrorMessage';
import { InputField } from '../../atoms/InputField/InputField';
import { InputLabel } from '../../atoms/InputLabel/InputLabel';
import './Input.scss';

export type InputType = 'text' | 'number' | 'password' | 'tel' | 'email';

export type InputProps = {
  value: string;
  type?: InputType;
  onChange?: (input: string) => void;
  label?: string;
  placeholder?: string;
  success?: boolean;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

export const Input: FC<InputProps> = ({
  value,
  type = 'text',
  onChange,
  label,
  placeholder,
  success,
  error,
  disabled,
  required,
  className,
}) => {
  return (
    <div className={createClassName('input-wrapper', className)}>
      <InputLabel label={label} error={!!error?.length} success={success} />

      <InputField
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        error={!!error?.length}
        success={success}
      />

      <InputErrorMessage message={error} />
    </div>
  );
};
