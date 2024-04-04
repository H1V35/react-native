import { type StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import { useMovie } from '~/presentation/hooks/useMovie';
import { type RootStackParams } from '~/presentation/navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export function DetailsScreen({ route }: Props) {
  const { movieId } = route.params;

  const {} = useMovie(movieId);

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
}
