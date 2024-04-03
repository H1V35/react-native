import { Pressable, Text } from 'react-native';

import { globalStyles } from '~/config/theme/theme';

interface Props {
  label: string;
  onPress: () => void;
}

export function PrimaryButton({ label, onPress }: Props) {
  return (
    <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
}
