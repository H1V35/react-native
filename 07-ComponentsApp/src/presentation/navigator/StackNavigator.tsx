import { createStackNavigator } from '@react-navigation/stack';

import { AlertScreen } from '~/presentation/screens/alerts/AlertScreen';
import { Animation101Screen } from '~/presentation/screens/animations/Animation101Screen';
import { Animation102Screen } from '~/presentation/screens/animations/Animation102Screen';
import { HomeScreen } from '~/presentation/screens/home/HomeScreen';
import { TextInputScreen } from '~/presentation/screens/inputs/TextInputScreen';
import { SwitchScreen } from '~/presentation/screens/switches/SwitchScreen';
import { CustomSectionListScreen } from '~/presentation/screens/ui/CustomSectionListScreen';
import { PullToRefreshScreen } from '~/presentation/screens/ui/PullToRefreshScreen';

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
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />

      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
    </Stack.Navigator>
  );
}
