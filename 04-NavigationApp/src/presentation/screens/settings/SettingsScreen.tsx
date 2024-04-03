import { StackActions, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';

export function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>SettingsScreen</Text>

      <PrimaryButton label="Back" onPress={() => navigation.goBack()} />

      <PrimaryButton
        label="Back to Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
}
