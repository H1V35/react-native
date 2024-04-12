import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { globalStyles } from '~/config/theme/theme';

interface Props {
  margin?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export function CustomView({ margin = false, style, children }: Props) {
  return (
    <View style={[globalStyles.mainContainer, margin ? globalStyles.globalMargin : null, style]}>
      {children}
    </View>
  );
}
