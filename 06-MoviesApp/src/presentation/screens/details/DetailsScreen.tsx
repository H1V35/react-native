import { type StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import { MovieHeader } from '~/presentation/components/movie/MovieHeader';
import { useMovie } from '~/presentation/hooks/useMovie';
import { type RootStackParams } from '~/presentation/navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export function DetailsScreen({ route }: Props) {
  const { movieId } = route.params;

  const { isLoading, movie } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
    </View>
  );
}
