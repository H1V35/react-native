import React from 'react';

import { ThemeColors, darkColors, lightColors } from '~/config/theme/theme';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = React.createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeColor>('light');

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colors: currentTheme === 'light' ? lightColors : darkColors,
        isDark: currentTheme !== 'light',
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
