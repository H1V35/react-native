import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWorldScreen } from '~/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

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
