import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

import { ThemeContext } from '~/presentation/context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  size?: number;
  onPress: () => void;
}

export function SearchButton({ style, size = 30, onPress }: Props) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Pressable onPress={onPress} style={style}>
      <Ionicons name="search" size={size} color={theme.colors.text} />
    </Pressable>
  );
}
