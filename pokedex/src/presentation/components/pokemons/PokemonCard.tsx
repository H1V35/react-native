import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { Formatter } from '~/config/helpers/formatter';
import { type Pokemon } from '~/domain/entities/pokemon';
import { FadeInImage } from '~/presentation/components/ui/FadeInImage';
import { RootStackParams } from '~/presentation/navigator/StackNavigator';

interface Props {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => navigation.navigate('PokemonScreen', { pokemonId: pokemon.id })}>
      <Card style={[styles.cardContainer]}>
        <Text style={styles.name} variant="bodyLarge" lineBreakMode="middle">
          {Formatter.capitalize(pokemon.name)}
          {'\n#' + pokemon.id}
        </Text>

        <View style={styles.pokeballContainer}>
          <Image source={require('~/assets/pokeball-light.png')} style={styles.pokeball} />
        </View>

        <FadeInImage uri={pokemon.avatar} style={styles.pokemonImage} />

        <Text style={[styles.name, { marginTop: 40 }]}>{pokemon.types[0]}</Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    flex: 0.5,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    top: 6,
    left: 10,
  },
  pokeball: {
    width: 100,
    height: 100,
    right: -20,
    top: -30,
    opacity: 0.4,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -15,
    top: -30,
    zIndex: -10,
  },

  pokeballContainer: {
    alignItems: 'flex-end',
    width: '100%',
    position: 'absolute',

    overflow: 'hidden',
    opacity: 0.5,
    zIndex: -20,
  },
});
