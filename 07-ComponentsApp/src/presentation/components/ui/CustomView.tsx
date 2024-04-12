import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { globalStyles } from '~/config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export function CustomView({ style, children }: Props) {
  return (
    <View style={[globalStyles.mainContainer, globalStyles.globalMargin, style]}>{children}</View>
  );
}