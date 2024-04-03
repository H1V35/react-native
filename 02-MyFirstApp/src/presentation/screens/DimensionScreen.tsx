import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export function DimensionScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.redBox,
            width: width * 0.5,
          }}
        />
      </View>

      <Text>
        W: {width} | H: {height}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'green',
  },
  redBox: {
    backgroundColor: 'red',
    height: '50%',
    width: '50%',
  },
});
