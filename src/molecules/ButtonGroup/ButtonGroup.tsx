import React, { FC } from 'react';
import { Button, ButtonProps } from '../../atoms/Button/Button';

export type ButtonGroupProps = {
  buttons: ButtonProps[];
  className?: string;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({ buttons, className }) => {
  return (
    <div className={className}>
      {buttons?.map((button, i) => (
        <Button
          label={button.label}
          type={button.type}
          onClick={() => button.onClick?.()}
          disabled={button.disabled}
          className={button.className}
        />
      ))}
    </div>
  );
};
