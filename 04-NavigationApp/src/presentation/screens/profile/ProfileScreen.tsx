import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';

export function ProfileScreen() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, margin: top }}>
      <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>

      <PrimaryButton
        label="Show menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
}
