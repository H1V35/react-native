import React from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

import { globalStyles } from '~/presentation/theme/global.styles';

// import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';

export function CounterM3Screen() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
      />
    </View>
  );
}
