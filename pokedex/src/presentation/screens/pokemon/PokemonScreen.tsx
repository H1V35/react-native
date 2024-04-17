import { StackScreenProps } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';
import { Chip, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getPokemonById } from '~/actions/pokemons/get-pokemon-by-id';
import { Formatter } from '~/config/helpers/formatter';
import { FadeInImage } from '~/presentation/components/ui/FadeInImage';
import { FullScreenLoader } from '~/presentation/components/ui/FullScreenLoader';
import { ThemeContext } from '~/presentation/context/ThemeContext';
import { RootStackParams } from '~/presentation/navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export function PokemonScreen({ navigation, route }: Props) {
  const { isDark } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();
  const { pokemonId } = route.params;

  const pokeballImg = isDark
    ? require('~/assets/pokeball-light.png')
    : require('~/assets/pokeball-dark.png');

  const { isLoading, data: pokemon } = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => getPokemonById(pokemonId),
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (!pokemon) {
    return <Text>Not found</Text>;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'grey' }}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 5,
          }}>
          {Formatter.capitalize(pokemon.name)}
          {'\n#' + pokemon.id}
        </Text>

        <Image source={pokeballImg} style={styles.pokeball} />

        <FadeInImage uri={pokemon.avatar} style={styles.pokemonImage} />
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10 }}>
        {pokemon.types.map((type) => (
          <Chip key={type} mode="outlined" selectedColor="white" style={{ marginLeft: 10 }}>
            {type}
          </Chip>
        ))}
      </View>

      <FlatList
        data={pokemon.sprites}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        centerContent
        style={{
          marginTop: 20,
          height: 100,
        }}
        renderItem={({ item }) => (
          <FadeInImage uri={item} style={{ width: 100, height: 100, marginHorizontal: 5 }} />
        )}
      />

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 240,
    height: 240,
    position: 'absolute',
    bottom: -40,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  statsContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
