import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { createClassName } from '../../utils/stringUtils';
import { ButtonElementProps, ButtonProps } from './Button.types';
import { getButtonPadding } from './Button.utils';

const ButtonElement: FC<ButtonElementProps> = ({
  label,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className={createClassName(`${variant}`, className)}
    >
      {label}
    </button>
  );
};

const StyledButton = styled(ButtonElement)`
  display: inline-block;
  padding: ${props => getButtonPadding(props.size)};
  border-width: 2px;
  border-style: solid;
  border-radius: ${props => props?.theme?.cornerRoundness};

  text-align: center;
  font-size: 1rem;
  font-weight: bolder;

  box-shadow: ${props => props?.theme?.boxShadow};

  transition: ${props => props?.theme?.transitionSpeed};

  &:hover:not(:disabled) {
    transform: scale(102%);
    cursor: pointer;
    filter: brightness(0.95);
  }

  &:disabled {
    opacity: 0.35;
    filter: grayscale(1);
    box-shadow: none;
  }

  &.primary {
    border-color: rgba(0, 0, 0, 0.07);
    background-color: ${props => props?.theme?.colorPalette.primary};
    color: ${props => props?.theme?.colorPalette.text};
  }

  &.secondary {
    border-color: ${props => props?.theme?.colorPalette.primary};
    background-color: transparent;
    color: ${props => props?.theme?.colorPalette.primary};
  }
`;

export const Button: FC<ButtonProps> = ({
  label,
  variant,
  size,
  type,
  onClick,
  disabled,
  className,
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      label={label}
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled}
      theme={theme}
      className={className}
    />
  );
};
