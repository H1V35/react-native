import { Text, View } from 'react-native';

import { useMovies } from '~/presentation/hooks/useMovies';

export function HomeScreen() {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
