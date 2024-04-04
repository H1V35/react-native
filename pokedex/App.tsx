import 'react-native-gesture-handler';

import { ThemeContextProvider } from '~/presentation/context/ThemeContext';
import { StackNavigator } from '~/presentation/navigator/StackNavigator';

export default function App() {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
}
