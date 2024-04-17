import React from 'react';
import { Animated, ImageStyle, StyleProp, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { ThemeContext } from '~/presentation/context/ThemeContext';
import { useAnimation } from '~/presentation/hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
  const { theme } = React.useContext(ThemeContext);
  const { animatedOpacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = React.useState(true);

  const isDisposed = React.useRef(false);

  React.useEffect(() => {
    return () => {
      isDisposed.current = true;
    };
  }, []);

  const onLoadEnd = () => {
    if (isDisposed.current) return;
    fadeIn({});
    setIsLoading(false);
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={[style, { position: 'absolute', bottom: -15 }]}
          color={theme.colors.text}
          size={30}
        />
      )}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={onLoadEnd}
        style={[style, { opacity: animatedOpacity, resizeMode: 'contain' }]}
      />
    </View>
  );
};
