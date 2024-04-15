import React from 'react';
import { Modal, Platform, View } from 'react-native';

import { Button } from '~/presentation/components/ui/Button';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { Title } from '~/presentation/components/ui/Title';
import { ThemeContext } from '~/presentation/context/ThemeContext';

export function ModalScreen() {
  const { colors } = React.useContext(ThemeContext);
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Open modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={{ flex: 1, backgroundColor: colors.cardBackground }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Title text="Modal content" safe />
          </View>

          <View style={{ flex: 1 }} />

          <Button
            text="Close modal"
            onPress={() => setIsVisible(false)}
            style={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
}
