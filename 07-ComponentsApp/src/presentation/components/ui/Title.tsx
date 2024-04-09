import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, globalStyles } from '~/config/theme/theme';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export function Title({ text, safe = false, white = false }: Props) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: safe ? bottom : 0,
        color: white ? 'white' : colors.text,
      }}>
      {text}
    </Text>
  );
}
