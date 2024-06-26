import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MoviePoster from './MoviePoster';

import type { Movie } from '~/core/entities/movie.entity';

interface Props {
  movies: Movie[];
  height?: number;
}

export function PosterCarousel({ movies, height = 440 }: Props) {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}
