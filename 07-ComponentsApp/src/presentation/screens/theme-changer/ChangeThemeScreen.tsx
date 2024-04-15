import { View } from 'react-native';

import { Button } from '~/presentation/components/ui/Button';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { Title } from '~/presentation/components/ui/Title';

export function ChangeThemeScreen() {
  return (
    <CustomView margin>
      <Title text="Change theme" safe />

      <Button text="Light" onPress={() => {}} />

      <View style={{ height: 10 }} />

      <Button text="Dark" onPress={() => {}} />
    </CustomView>
  );
}
