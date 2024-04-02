import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { CounterScreen } from '~/presentation/screens/CounterScreen';
// import { HelloWorldScreen } from '~/presentation/screens/HelloWorldScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HelloWorldScreen name="Hive" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
