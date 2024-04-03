import { type NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { HamburgerMenu } from '~/presentation/components/shared/HamburgerMenu';
import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';
import { type RootStackParams } from '~/presentation/routes/StackNavigator';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <PrimaryButton label="Products" onPress={() => navigation.navigate('Products')} />

      <PrimaryButton label="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}
