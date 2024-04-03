import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/app-theme';
import { useCounterStore } from '~/presentation/store/counter-store';

export function CountScreen() {
  const count = useCounterStore((state) => state.count);
  const incrementBy = useCounterStore((state) => state.incrementBy);

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: `${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{count}</Text>

      <Pressable onPress={() => incrementBy(+1)} style={globalStyles.primaryButton}>
        <Text>+1</Text>
      </Pressable>

      <Pressable onPress={() => incrementBy(-1)} style={globalStyles.primaryButton}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
}
