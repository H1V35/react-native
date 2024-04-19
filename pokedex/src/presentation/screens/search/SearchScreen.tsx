import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Platform, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getPokemonNamesWithId } from '~/actions/pokemons/get-pokemon-names-with-id';
import { getPokemonsByIds } from '~/actions/pokemons/get-pokemons-by-ids';
import { globalTheme } from '~/config/theme/global-theme';
import { PokemonCard } from '~/presentation/components/pokemons/PokemonCard';
import { BackButton } from '~/presentation/components/ui/BackButton';
import { FullScreenLoader } from '~/presentation/components/ui/FullScreenLoader';
import { ThemeContext } from '~/presentation/context/ThemeContext';
import { useDebouncedValue } from '~/presentation/hooks/useDebouncedValue';
import { RootStackParams } from '~/presentation/navigator/StackNavigator';

export function SearchScreen() {
  const { theme } = React.useContext(ThemeContext);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const { top } = useSafeAreaInsets();
  const [term, setTerm] = React.useState('');

  const debouncedValue = useDebouncedValue(term);

  const { isLoading, data: pokemonNameList = [] } = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonNameIdList = React.useMemo(() => {
    if (!isNaN(Number(debouncedValue))) {
      const pokemon = pokemonNameList.find((pokemon) => pokemon.id === Number(debouncedValue));
      return pokemon ? [pokemon] : [];
    }

    if (debouncedValue.length === 0) return [];
    if (debouncedValue.length < 3) return [];

    return pokemonNameList.filter((pokemon) =>
      pokemon.name.includes(debouncedValue.toLocaleLowerCase())
    );
  }, [debouncedValue]);

  const { isLoading: isLoadingPokemons, data: pokemons = [] } = useQuery({
    queryKey: ['pokemons', 'by', pokemonNameIdList],
    queryFn: () => getPokemonsByIds(pokemonNameIdList.map((pokemon) => pokemon.id)),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, { paddingTop: top + 20 }]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}>
        <BackButton color={theme.colors.text} size={45} onPress={() => navigation.goBack()} />
        <TextInput
          placeholder="Search Pokémon"
          mode="flat"
          autoFocus
          autoCorrect={false}
          value={term}
          onChangeText={setTerm}
          selectionColor={theme.colors.text}
          activeUnderlineColor={theme.colors.text}
          style={{
            backgroundColor: 'transparent',
            flexGrow: 1,
            fontSize: 28,
            marginRight: 5,
            marginBottom: 6,
          }}
        />
      </View>

      {isLoadingPokemons && (
        <ActivityIndicator color={theme.colors.text} size={30} style={{ paddingTop: 20 }} />
      )}

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{ paddingTop: 14 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListFooterComponent={<View style={{ height: Platform.OS === 'ios' ? 90 : 80 }} />}
      />
    </View>
  );
}
