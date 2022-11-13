import React, { FC } from 'react';
import './InputErrorMessage.scss';

export type InputErrorMessageProps = {
  message?: string;
};

export const InputErrorMessage: FC<InputErrorMessageProps> = ({ message }) => {
  if (!message?.length) {
    return null;
  }

  return <span className='input-error'>{message}</span>;
};
