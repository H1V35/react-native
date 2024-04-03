import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { DimensionScreen } from '~/presentation/screens/DimensionScreen';
// import { BoxObjectModelScreen } from '~/presentation/screens/BoxObjectModelScreen';
// import { CounterM3Screen } from '~/presentation/screens/CounterM3Screen';
// import { CounterScreen } from '~/presentation/screens/CounterScreen';
// import { HelloWorldScreen } from '~/presentation/screens/HelloWorldScreen';

export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicons {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name="Hive" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        <DimensionScreen />
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
