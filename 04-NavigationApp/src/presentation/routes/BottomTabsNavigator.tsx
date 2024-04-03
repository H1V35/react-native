import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackNavigator } from './StackNavigator';
import { TopTabsNavigator } from './TopTabsNavigator';

import { globalColors } from '~/config/theme/theme';
import { Tab1Screen } from '~/presentation/screens/tabs/Tab1Screen';
// import { Tab2Screen } from '~/presentation/screens/tabs/Tab2Screen';
// import { Tab3Screen } from '~/presentation/screens/tabs/Tab3Screen';

const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: globalColors.primary,
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
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => (
            <Ionicons name="accessibility-outline" size={20} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => <Ionicons name="airplane-outline" size={20} color={color} />,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => <Ionicons name="bar-chart-outline" size={20} color={color} />,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
}
