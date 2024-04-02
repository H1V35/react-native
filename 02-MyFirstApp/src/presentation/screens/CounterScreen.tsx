import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';

export function CounterScreen() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <PrimaryButton
        label="Increment"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
