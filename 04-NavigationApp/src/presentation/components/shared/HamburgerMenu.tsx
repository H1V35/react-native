import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';

export function HamburgerMenu() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return <></>;
}
