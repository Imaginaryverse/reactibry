import React, { FC } from 'react';
import { useTheme } from '../../theme/context/ThemeContext';

type AppBodyProps = {
  children?: React.ReactNode | React.ReactNode[];
};
export const AppBody: FC<AppBodyProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className='App'
      style={{
        height: '100vh',
        width: '100vw',
        color: theme.colorPalette.text,
        backgroundColor: theme.colorPalette.body,
        transition: theme.transitionSpeed,
      }}
    >
      {children}
    </div>
  );
};
