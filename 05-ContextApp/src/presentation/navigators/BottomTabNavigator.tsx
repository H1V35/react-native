import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '~/presentation/screens/home/HomeScreen';
import { ProfileScreen } from '~/presentation/screens/profile/ProfileScreen';
import { CountScreen } from '~/presentation/screens/settings/CountScreen';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
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
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={20} color={color} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={20} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Count"
        options={{
          title: 'Count',
          tabBarIcon: ({ color }) => <Ionicons name="add-outline" size={20} color={color} />,
        }}
        component={CountScreen}
      />
    </Tab.Navigator>
  );
}
