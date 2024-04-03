import { Pressable, Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/app-theme';

export function CalculatorScreen() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>N</Text>
        </Pressable>
      </View>
    </View>
  );
}
