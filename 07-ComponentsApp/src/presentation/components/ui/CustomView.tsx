import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { ThemeContext } from '~/presentation/context/ThemeContext';

interface Props {
  margin?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export function CustomView({ margin = false, style, children }: Props) {
  const { colors } = React.useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        { backgroundColor: colors.background },
        style,
      ]}>
      {children}
    </View>
  );
}
