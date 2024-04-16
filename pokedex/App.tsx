import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

import { ThemeContextProvider } from '~/presentation/context/ThemeContext';
import { StackNavigator } from '~/presentation/navigator/StackNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StatusBar style="auto" />
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
