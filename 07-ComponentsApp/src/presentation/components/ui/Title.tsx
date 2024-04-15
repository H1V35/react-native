import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '~/config/theme/theme';
import { ThemeContext } from '~/presentation/context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export function Title({ text, safe = false, white = false }: Props) {
  const { top } = useSafeAreaInsets();
  const { colors } = React.useContext(ThemeContext);

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
      }}>
      {text}
    </Text>
  );
}
