import { type StackScreenProps } from '@react-navigation/stack';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MovieDetails } from '~/presentation/components/movie/MovieDetails';
import { MovieHeader } from '~/presentation/components/movie/MovieHeader';
import { useMovie } from '~/presentation/hooks/useMovie';
import { type RootStackParams } from '~/presentation/navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export function DetailsScreen({ route }: Props) {
  const { movieId } = route.params;

  const { isLoading, movie, cast = [] } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
}
