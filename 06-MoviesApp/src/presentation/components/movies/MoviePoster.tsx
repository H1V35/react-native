import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { type Movie } from '~/core/entities/movie.entity';
import { type RootStackParams } from '~/presentation/navigation/Navigation';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export default function MoviePoster({ movie, width = 300, height = 420 }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { movieId: movie.id })}
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 4,
        paddingBottom: 20,
        paddingHorizontal: 6,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: movie.poster }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
});
