import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { View, useWindowDimensions } from 'react-native';

import { BottomTabsNavigator } from './BottomTabsNavigator';
// import { StackNavigator } from './StackNavigator';

import { globalColors } from '~/config/theme/theme';
import { ProfileScreen } from '~/presentation/screens/profile/ProfileScreen';

const Drawer = createDrawerNavigator();

export function SideMenuNavigator() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Ionicons name="bonfire-outline" size={20} color={color} />,
        }}
        name="Tabs"
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={20} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
