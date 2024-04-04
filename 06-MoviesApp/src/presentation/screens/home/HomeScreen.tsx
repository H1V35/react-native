import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HorizontalCarousel } from '~/presentation/components/movies/HorizontalCarousel';
import { PosterCarousel } from '~/presentation/components/movies/PosterCarousel';
import { useMovies } from '~/presentation/hooks/useMovies';

export function HomeScreen() {
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/* Main */}
        <PosterCarousel movies={nowPlaying} />

        {/* Popular */}
        <HorizontalCarousel movies={popular} title="Popular" loadNextPage={popularNextPage} />

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />

        {/* Upcoming */}
        <HorizontalCarousel movies={upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
}
