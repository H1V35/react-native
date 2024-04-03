import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton label="Products" onPress={() => navigation.navigate('Products' as never)} />

      <PrimaryButton label="Settings" onPress={() => navigation.navigate('Settings' as never)} />
    </View>
  );
}
