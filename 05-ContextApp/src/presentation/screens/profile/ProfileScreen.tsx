import { Pressable, Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/app-theme';
import { useProfileStore } from '~/presentation/store/profile-store';

export function ProfileScreen() {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const changeProfile = useProfileStore((state) => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({ name: 'Hive' })}>
        <Text>Change name</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({ email: 'hive@google.com' })}>
        <Text>Change email</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('John Cena', 'john.cena@google.com')}>
        <Text>IT'S JOHN CENAAA!</Text>
      </Pressable>
    </View>
  );
}
