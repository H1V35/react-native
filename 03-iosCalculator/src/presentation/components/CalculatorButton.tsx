import { Pressable, Text } from 'react-native';

import { colors, globalStyles } from '~/config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  dobleSize?: boolean;
  onPress: () => void;
}

export function CalculatorButton({
  label,
  color = colors.darkGray,
  blackText = false,
  dobleSize = false,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: dobleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text style={{ ...globalStyles.buttonText, color: blackText ? 'black' : 'white' }}>
        {label}
      </Text>
    </Pressable>
  );
}
