import { createStackNavigator } from '@react-navigation/stack';

import { Animation101Screen } from '~/presentation/screens/animations/Animation101Screen';
import { Animation102Screen } from '~/presentation/screens/animations/Animation102Screen';
import { HomeScreen } from '~/presentation/screens/home/HomeScreen';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
    </Stack.Navigator>
  );
}
