// import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

// import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';
import { globalStyles } from '~/presentation/theme/global.styles';

export function CounterM3Screen() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      {/* <Ionicons name="add" size={24} color="black" /> */}

      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
        icon="add"
      />
    </View>
  );
}
