import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { SideMenuNavigator } from '~/presentation/routes/SideMenuNavigator';
// import { StackNavigator } from '~/presentation/routes/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
}
