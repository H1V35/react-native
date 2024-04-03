import { createStackNavigator } from '@react-navigation/stack';

import { DetailsScreen } from '~/presentation/screens/details/DetailsScreen';
import { HomeScreen } from '~/presentation/screens/home/HomeScreen';

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
