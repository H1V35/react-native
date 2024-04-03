import React from 'react';
import { Text, View } from 'react-native';

import { HamburgerMenu } from '~/presentation/components/shared/HamburgerMenu';

export function Tab1Screen() {
  return (
    <View>
      <HamburgerMenu />

      <Text>Tab1Screen</Text>
    </View>
  );
}
