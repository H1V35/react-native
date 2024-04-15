import React from 'react';

import { ThemeColors, lightColors } from '~/config/theme/theme';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = React.createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const setTheme = (theme: ThemeColor) => {
    console.log({ theme });
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: 'light',
        colors: lightColors,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
