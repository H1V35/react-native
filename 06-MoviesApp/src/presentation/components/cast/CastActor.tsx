import { Image, StyleSheet, View, Text } from 'react-native';

import { type Cast } from '~/core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export function CastActor({ actor }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: actor.avatar }} style={styles.actorAvatar} />

      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 15, fontWeight: '300' }}>{actor.name}</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorAvatar: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
