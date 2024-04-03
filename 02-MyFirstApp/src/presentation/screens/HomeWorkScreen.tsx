import { StyleSheet, View } from 'react-native';

export default function HomeWorkScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425B',
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
