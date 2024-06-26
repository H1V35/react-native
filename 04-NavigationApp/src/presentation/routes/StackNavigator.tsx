import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HomeScreen } from '~/presentation/screens/home/HomeScreen';
import { ProductScreen } from '~/presentation/screens/products/ProductScreen';
import { ProductsScreen } from '~/presentation/screens/products/ProductsScreen';
import { SettingsScreen } from '~/presentation/screens/settings/SettingsScreen';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: { item: { id: number; name: string } };
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export function StackNavigator() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
