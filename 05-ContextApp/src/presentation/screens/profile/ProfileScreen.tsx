import { Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/app-theme';
import { useProfileStore } from '~/presentation/store/profile-store';

export function ProfileScreen() {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>
    </View>
  );
}
