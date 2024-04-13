import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { colors } from '~/config/theme/theme';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { Title } from '~/presentation/components/ui/Title';

export function InfiniteScrollScreen() {
  const [numbers, setNumbers] = React.useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
    setNumbers([...numbers, ...newArray]);
  };

  return (
    <CustomView margin>
      <Title text="Infinite Scroll" safe />

      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Text
            style={{
              height: 300,
              backgroundColor: colors.primary,
              color: 'white',
              fontSize: 60,
            }}>
            {item}
          </Text>
        )}
      />
    </CustomView>
  );
}
