import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWorldScreen } from '~/presentation/screens/HelloWorldScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HelloWorldScreen name="Hive" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
