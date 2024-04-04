import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PosterCarousel } from '~/presentation/components/movies/PosterCarousel';
import { useMovies } from '~/presentation/hooks/useMovies';

export function HomeScreen() {
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <PosterCarousel movies={nowPlaying} />
      </View>
    </ScrollView>
  );
}
