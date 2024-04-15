import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { ThemeContext, ThemeProvider } from '~/presentation/context/ThemeContext';
import { StackNavigator } from '~/presentation/navigator/StackNavigator';

const AppNavigation = ({ children }: React.PropsWithChildren) => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>{children}</NavigationContainer>
  );
};

const AppTheme = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <AppTheme>
      <StackNavigator />
    </AppTheme>
  );
}
