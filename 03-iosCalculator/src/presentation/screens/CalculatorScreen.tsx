import { Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/app-theme';

export function CalculatorScreen() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
    </View>
  );
}
