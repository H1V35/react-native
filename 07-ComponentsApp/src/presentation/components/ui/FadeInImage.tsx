import React from 'react';
import { ImageStyle, StyleProp, View, Animated, ActivityIndicator } from 'react-native';

import { useAnimation } from '~/presentation/hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export function FadeInImage({ uri, style }: Props) {
  const { animatedOpacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && <ActivityIndicator style={{ position: 'absolute' }} color="grey" size={30} />}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={() => {
          fadeIn({ duration: 600 });
          setIsLoading(false);
        }}
        style={[style, { opacity: animatedOpacity }]}
      />
    </View>
  );
}
