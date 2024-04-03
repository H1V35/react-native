import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';

import { ProfileScreen } from '~/presentation/screens/profile/ProfileScreen';

const Drawer = createDrawerNavigator();

export function SideMenuNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
