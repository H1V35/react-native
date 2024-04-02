import React from 'react';
import { Text, View, StyleSheet, Pressable, Platform } from 'react-native';

export function CounterScreen() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <Pressable
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={{ color: '#fff', fontWeight: '800' }}>Increment</Text>
      </Pressable>
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
  button: {
    backgroundColor: Platform.OS === 'ios' ? '#339fff' : '#41b553',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'ios' ? '#238deb' : '#3ba34b',
  },
});
