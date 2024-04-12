import { Alert, View } from 'react-native';

import { showPrompt } from '~/config/adapters/prompt.adapter';
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

  const onShowPrompt = () => {
    // ! react-native-prompt-android code adapter
    showPrompt({
      title: 'Lorem Ipsum',
      subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      buttons: [{ text: 'Ok', onPress: () => console.log('Ok') }],
      placeholder: 'Placeholder',
    });

    // ! Native code
    // Alert.prompt(
    //   'Password',
    //   'Enim commodo ut amet esse aliqua',
    //   (value: string) => console.log({ value }),
    //   'secure-text',
    //   "I'm the default value",
    //   'number-pad'
    // );
  };

  return (
    <CustomView margin>
      <Title safe text="Alerts" />

      <Button text="Alert - 2 Buttons" onPress={createTwoButtonAlert} />
      <View style={{ height: 10 }} />

      <Button text="Alert - 3 Buttons" onPress={createThreeButtonAlert} />
      <View style={{ height: 10 }} />

      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
}
