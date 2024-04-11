import { Button } from '~/presentation/components/ui/Button';
import { Card } from '~/presentation/components/ui/Card';
import { CustomView } from '~/presentation/components/ui/CustomView';

export function SwitchScreen() {
  return (
    <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
      <Card>
        <Button text="Click me" onPress={() => {}} />
      </Card>
    </CustomView>
  );
}
