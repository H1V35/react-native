import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { CastActor } from '../cast/CastActor';

import { Formatter } from '~/config/helpers/formatter';
import { type Cast } from '~/core/entities/cast.entity';
import { type FullMovie } from '~/core/entities/movie.entity';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export function MovieDetails({ movie, cast }: Props) {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text>{movie.rating}</Text>

          <Text style={{ marginLeft: 5 }}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: '500' }}>Synopsis</Text>

        <Text style={{ fontSize: 16, marginTop: 5 }}>{movie.description}</Text>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: '500' }}>Budget</Text>

        <Text style={{ fontSize: 16, marginTop: 5 }}>{Formatter.currency(movie.budget)}</Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: '500',
            marginHorizontal: 20,
          }}>
          Cast
        </Text>

        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
}
