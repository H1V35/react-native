import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { HamburgerMenu } from '../components/shared/HamburgerMenu';

import { AboutScreen } from '~/presentation/screens/about/AboutScreen';
import { ProfileScreen } from '~/presentation/screens/profile/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

export function TopTabsNavigator() {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
}
