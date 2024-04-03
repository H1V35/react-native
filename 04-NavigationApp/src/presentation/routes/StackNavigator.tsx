import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '~/presentation/screens/home/HomeScreen';
import { ProductsScreen } from '~/presentation/screens/products/ProductsScreen';
import { SettingsScreen } from '~/presentation/screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
