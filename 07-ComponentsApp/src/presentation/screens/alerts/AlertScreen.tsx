import { Alert, View } from 'react-native';

import { Button } from '~/presentation/components/ui/Button';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { Title } from '~/presentation/components/ui/Title';

export function AlertScreen() {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
      }
    );

  const showPrompt = () => {
    Alert.prompt(
      'Password',
      'Enim commodo ut amet esse aliqua',
      (value: string) => console.log({ value }),
      'secure-text',
      "I'm the default value",
      'number-pad'
    );
  };

  return (
    <CustomView>
      <Title safe text="Alerts" />

      <Button text="Alert - 2 Buttons" onPress={createTwoButtonAlert} />
      <View style={{ height: 10 }} />

      <Button text="Alert - 3 Buttons" onPress={createThreeButtonAlert} />
      <View style={{ height: 10 }} />

      <Button text="Prompt - Input" onPress={showPrompt} />
    </CustomView>
  );
}
