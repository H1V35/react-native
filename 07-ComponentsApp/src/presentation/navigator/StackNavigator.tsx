import { createStackNavigator } from '@react-navigation/stack';

import { AlertScreen } from '~/presentation/screens/alerts/AlertScreen';
import { Animation101Screen } from '~/presentation/screens/animations/Animation101Screen';
import { Animation102Screen } from '~/presentation/screens/animations/Animation102Screen';
import { HomeScreen } from '~/presentation/screens/home/HomeScreen';
import { SwitchScreen } from '~/presentation/screens/switches/SwitchScreen';

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

      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
    </Stack.Navigator>
  );
}
