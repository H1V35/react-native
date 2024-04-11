import React from 'react';

import { Card } from '~/presentation/components/ui/Card';
import { CustomSwitch } from '~/presentation/components/ui/CustomSwitch';
import { CustomView } from '~/presentation/components/ui/CustomView';

export function SwitchScreen() {
  const [state, setState] = React.useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
          text="Are you active?"
        />

        <CustomSwitch
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
          text="Are you hungry?"
        />

        <CustomSwitch
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text="Are you happy?"
        />
      </Card>
    </CustomView>
  );
}
