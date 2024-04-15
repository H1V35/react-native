import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { ThemeContext } from '~/presentation/context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export function Separator({ style }: Props) {
  const { colors } = React.useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8,
          },
          style,
        ]}
      />
    </View>
  );
}
