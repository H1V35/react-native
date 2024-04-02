import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { CounterScreen } from '~/presentation/screens/CounterScreen';
// import { HelloWorldScreen } from '~/presentation/screens/HelloWorldScreen';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name="Hive" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
