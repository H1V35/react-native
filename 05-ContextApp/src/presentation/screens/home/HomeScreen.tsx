import { Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/app-theme';
import { useCounterStore } from '~/presentation/store/counter-store';
import { useProfileStore } from '~/presentation/store/profile-store';

export function HomeScreen() {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);

  const count = useCounterStore((state) => state.count);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>

      <Text style={globalStyles.title}>{count}</Text>
    </View>
  );
}
