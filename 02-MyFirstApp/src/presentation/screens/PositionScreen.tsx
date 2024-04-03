import { StyleSheet, View } from 'react-native';

export function PositionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
      <View style={styles.blueBox} />
      <View style={styles.purpleBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  redBox: {
    backgroundColor: 'red',
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    top: 0,
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
