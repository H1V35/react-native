import React from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '~/config/theme/theme';
import { useAnimation } from '~/presentation/hooks/useAnimation';

export function Animation101Screen() {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />

      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -150,
            duration: 600,
            easing: Easing.bounce,
          });
        }}
        style={{ marginTop: 10 }}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  purpleBox: {
    backgroundColor: colors.primary,
    height: 150,
    width: 150,
  },
});
