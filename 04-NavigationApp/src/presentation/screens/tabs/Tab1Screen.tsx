import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

import { globalColors } from '~/config/theme/theme';
import { HamburgerMenu } from '~/presentation/components/shared/HamburgerMenu';

export function Tab1Screen() {
  return (
    <View>
      <HamburgerMenu />

      <Text>Tab1Screen</Text>

      <Ionicons name="rocket-outline" size={100} color={globalColors.primary} />
    </View>
  );
}
