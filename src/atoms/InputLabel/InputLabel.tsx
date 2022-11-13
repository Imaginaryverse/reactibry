import React, { FC } from 'react';
import { withOptionalClass } from '../../utils/stringUtils';
import { InputFieldProps } from '../InputField/InputField';
import './InputLabel.scss';

export type InputLabelProps = {
  label?: string;
  success?: InputFieldProps['success'];
  error?: InputFieldProps['error'];
  className?: string;
};

export const InputLabel: FC<InputLabelProps> = ({
  label,
  success,
  error,
  className,
}) => {
  if (!label?.length) {
    return null;
  }

  return (
    <label
      className={withOptionalClass('input-label', [
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
    >
      {label}
    </label>
  );
};
