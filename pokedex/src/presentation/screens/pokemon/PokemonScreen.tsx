import { StackScreenProps } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

import { getPokemonById } from '~/actions/pokemons/get-pokemon-by-id';
import { RootStackParams } from '~/presentation/navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export function PokemonScreen({ navigation, route }: Props) {
  const { pokemonId } = route.params;

  const { isLoading, data: pokemon } = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => getPokemonById(pokemonId),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View>
      <Text>{pokemon?.name}</Text>
    </View>
  );
}
