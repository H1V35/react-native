import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '~/presentation/components/ui/Button';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { Title } from '~/presentation/components/ui/Title';
import { ThemeContext } from '~/presentation/context/ThemeContext';

export function ChangeThemeScreen() {
  const { currentTheme, colors, setTheme } = React.useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Change theme ${currentTheme}`} safe />

      <Button text="Light" onPress={() => setTheme('light')} />

      <View style={{ height: 10 }} />

      <Button text="Dark" onPress={() => setTheme('dark')} />

      <View style={{ height: 10 }} />

      <Text style={{ color: colors.text }}>{JSON.stringify(colors, null, 2)}</Text>
    </CustomView>
  );
}
