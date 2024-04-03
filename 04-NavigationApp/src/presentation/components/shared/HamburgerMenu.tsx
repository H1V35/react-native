import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';

import { globalColors } from '~/config/theme/theme';

export function HamburgerMenu() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ marginLeft: 5 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Ionicons name="menu-outline" size={30} color={globalColors.primary} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
}
