import { Ionicons } from '@expo/vector-icons';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

interface Props {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export function BackButton({ color, size = 30, style, onPress }: Props) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Ionicons name="arrow-back" color={color} size={size} />
    </Pressable>
  );
}
