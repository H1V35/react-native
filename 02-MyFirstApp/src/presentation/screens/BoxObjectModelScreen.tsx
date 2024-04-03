import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function BoxObjectModelScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.redBox}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Hello World</Text>
      </View>
      {/* <View style={styles.greenBox} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  redBox: {
    height: 30,
    backgroundColor: 'red',
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 5,
  },
});
