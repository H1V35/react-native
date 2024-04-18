import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getPokemons } from '~/actions/pokemons/get-pokemons';
import { globalTheme } from '~/config/theme/global-theme';
import { PokemonCard } from '~/presentation/components/pokemons/PokemonCard';
import { PokeballBg } from '~/presentation/components/ui/PokeballBg';
import { SearchButton } from '~/presentation/components/ui/SearchButton';
import { ThemeContext } from '~/presentation/context/ThemeContext';
import { RootStackParams } from '~/presentation/navigator/StackNavigator';

export function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const queryClient = useQueryClient();

  // const { isLoading, data: pokemons = [] } = useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000 * 60 * 60,
  // });

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    initialPageParam: 0,
    staleTime: 1000 * 60 * 60,
    queryFn: async (params) => {
      const pokemons = await getPokemons(params.pageParam);
      pokemons.forEach((pokemon) => {
        queryClient.setQueryData(['pokemon', pokemon.id], pokemon);
      });

      return pokemons;
    },
    getNextPageParam: (lastPage, pages) => pages.length,
  });

  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBg style={styles.imgPosition} />

      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <HomeListHeader />}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        onEndReachedThreshold={0.6}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
}

function HomeListHeader() {
  const { theme } = React.useContext(ThemeContext);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Text variant="displayMedium">Pokédex</Text>
      <SearchButton
        color={theme.colors.text}
        size={45}
        onPress={() => navigation.navigate('SearchScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
