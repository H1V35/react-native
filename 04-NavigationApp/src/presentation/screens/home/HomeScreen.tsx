import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';
import { type RootStackParams } from '~/presentation/routes/StackNavigator';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton label="Products" onPress={() => navigation.navigate('Products')} />

      <PrimaryButton label="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}
