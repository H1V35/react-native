import React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

import { Button } from '~/presentation/components/ui/Button';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { ThemeContext } from '~/presentation/context/ThemeContext';
import { useAnimation } from '~/presentation/hooks/useAnimation';

export function Animation101Screen() {
  const { colors } = React.useContext(ThemeContext);
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
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

      <Button
        text="FadeIn"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -150,
            duration: 600,
            easing: Easing.bounce,
          });
        }}
        style={{ marginTop: 10, width: 90 }}
      />

      <Button text="FadeOut" onPress={() => fadeOut({})} style={{ marginTop: 10, width: 90 }} />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  purpleBox: {
    height: 150,
    width: 150,
    borderRadius: 4,
  },
});
