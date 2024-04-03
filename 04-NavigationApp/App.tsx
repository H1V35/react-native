import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { BottomTabsNavigator } from '~/presentation/routes/BottomTabsNavigator';
import { SideMenuNavigator } from '~/presentation/routes/SideMenuNavigator';
// import { StackNavigator } from '~/presentation/routes/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
}
