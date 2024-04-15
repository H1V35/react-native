import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '~/config/theme/theme';
import { ThemeContext } from '~/presentation/context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export function SubTitle({ text, safe = false, backgroundColor }: Props) {
  const { colors } = React.useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        color: colors.text,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: backgroundColor ? backgroundColor : colors.background,
      }}>
      {text}
    </Text>
  );
}
