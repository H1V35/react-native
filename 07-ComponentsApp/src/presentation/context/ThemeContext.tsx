import React from 'react';
import { AppState, Appearance, useColorScheme } from 'react-native';

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
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = React.useState<ThemeColor>('light');

  React.useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  // React.useEffect(() => {
  //   const subscription = AppState.addEventListener('change', (nextAppState) => {
  //     const colorScheme = Appearance.getColorScheme();
  //     setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

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
