import React from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';

import { CustomView } from '~/presentation/components/ui/CustomView';
import { ThemeContext } from '~/presentation/context/ThemeContext';

export function Animation102Screen() {
  const { colors } = React.useContext(ThemeContext);

  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    },
  });

  return (
    <CustomView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          styles.box,
          {
            backgroundColor: colors.primary,
          },
        ]}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
