import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { FadeInImage } from '~/presentation/components/ui/FadeInImage';
import { ThemeContext } from '~/presentation/context/ThemeContext';

export function InfiniteScrollScreen() {
  const { colors } = React.useContext(ThemeContext);
  const [numbers, setNumbers] = React.useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{ backgroundColor: 'black' }}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={30} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
}

interface ListItemProps {
  number: number;
}

function ListItem({ number }: ListItemProps) {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />

    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    // style={{
    //   height: 400,
    //   width: '100%',
    // }}
    // />
  );
}
