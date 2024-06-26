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
    <Pressable style={style} onPress={onPress}>
      <Ionicons name="search" color={color} size={size} />
    </Pressable>
  );
}
