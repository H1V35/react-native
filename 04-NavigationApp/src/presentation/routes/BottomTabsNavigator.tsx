import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { globalColors } from '~/config/theme/theme';
import { Tab1Screen } from '~/presentation/screens/tabs/Tab1Screen';
import { Tab2Screen } from '~/presentation/screens/tabs/Tab2Screen';
import { Tab3Screen } from '~/presentation/screens/tabs/Tab3Screen';

const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{ title: 'Tab1', tabBarIcon: ({ color }) => <Text style={{ color }}>Tab1</Text> }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{ title: 'Tab2', tabBarIcon: ({ color }) => <Text style={{ color }}>Tab2</Text> }}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="Tab3"
        options={{ title: 'Tab3', tabBarIcon: ({ color }) => <Text style={{ color }}>Tab3</Text> }}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
}
