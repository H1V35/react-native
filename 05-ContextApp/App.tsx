import { NavigationContainer } from '@react-navigation/native';

import { BottomTabNavigator } from '~/presentation/navigators/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
