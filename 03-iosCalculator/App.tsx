import React from 'react';
import { StatusBar, View } from 'react-native';

import { globalStyles } from '~/config/theme/app-theme';
import { CalculatorScreen } from '~/presentation/screens/CalculatorScreen';

export default function App() {
  return (
    <View style={globalStyles.background}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CalculatorScreen />
    </View>
  );
}
