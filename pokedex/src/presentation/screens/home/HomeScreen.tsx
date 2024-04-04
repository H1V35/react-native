import { useQuery } from '@tanstack/react-query';
import { StyleSheet, View } from 'react-native';

import { getPokemons } from '~/actions/pokemons/get-pokemons';
import { PokeballBg } from '~/presentation/components/ui/PokeballBg';

export function HomeScreen() {
  const { isLoading, data = [] } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View>
      <PokeballBg style={styles.imgPosition} />
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
