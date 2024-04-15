import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { ThemeContext } from '~/presentation/context/ThemeContext';

interface Props extends React.PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export function Card({ style, children }: Props) {
  const { colors } = React.useContext(ThemeContext);

  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
}
