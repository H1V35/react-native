import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { SideMenuNavigator } from '~/presentation/routes/SideMenuNavigator';
// import { BottomTabsNavigator } from '~/presentation/routes/BottomTabsNavigator';
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
