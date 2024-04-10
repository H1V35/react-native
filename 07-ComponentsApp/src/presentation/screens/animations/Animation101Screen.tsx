import React from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '~/config/theme/theme';

export function Animation101Screen() {
  const animatedOpacity = React.useRef(new Animated.Value(0)).current;
  const animatedTop = React.useRef(new Animated.Value(-150)).current;

  const fadeIn = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
      easing: Easing.bounce,
      // easing: Easing.elastic(1),
    }).start(() => console.log('AnimationTop ended'));

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('AnimationFadeIn ended'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
  };

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

      <Pressable onPress={fadeIn} style={{ marginTop: 10 }}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={fadeOut} style={{ marginTop: 10 }}>
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
