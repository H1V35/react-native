import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ThemeContext } from '~/presentation/context/ThemeContext';
import { AlertScreen } from '~/presentation/screens/alerts/AlertScreen';
import { Animation101Screen } from '~/presentation/screens/animations/Animation101Screen';
import { Animation102Screen } from '~/presentation/screens/animations/Animation102Screen';
import { HomeScreen } from '~/presentation/screens/home/HomeScreen';
import { TextInputScreen } from '~/presentation/screens/inputs/TextInputScreen';
import { SwitchScreen } from '~/presentation/screens/switches/SwitchScreen';
import { ChangeThemeScreen } from '~/presentation/screens/theme-changer/ChangeThemeScreen';
import { CustomSectionListScreen } from '~/presentation/screens/ui/CustomSectionListScreen';
import { InfiniteScrollScreen } from '~/presentation/screens/ui/InfiniteScrollScreen';
import { ModalScreen } from '~/presentation/screens/ui/ModalScreen';
import { PullToRefreshScreen } from '~/presentation/screens/ui/PullToRefreshScreen';
import { SlidesScreen } from '~/presentation/screens/ui/SlidesScreen';

const Stack = createStackNavigator();

export function StackNavigator() {
  const { colors } = React.useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />

      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />

      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
}
