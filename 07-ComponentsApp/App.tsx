import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { StackNavigator } from '~/presentation/navigator/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
}
