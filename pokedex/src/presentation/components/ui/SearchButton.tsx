import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

interface Props {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export function SearchButton({ color, size = 30, style, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Ionicons name="search" size={size} color={color} />
    </Pressable>
  );
}
