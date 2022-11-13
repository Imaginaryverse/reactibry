import { Theme } from '../../theme/context/ThemeContext';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';
export enum ButtonPadding {
  small = '0.25rem 0.75rem',
  medium = '0.5rem 1.25rem',
  large = '0.75rem 1.5rem',
}

export type ButtonElementProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  disabled?: boolean;
  theme: Theme;
  className?: string;
};

export type ButtonProps = Omit<ButtonElementProps, 'theme'>;
