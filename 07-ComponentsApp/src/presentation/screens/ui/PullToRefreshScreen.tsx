import React from 'react';
import { RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '~/config/theme/theme';
import { Title } from '~/presentation/components/ui/Title';
import { ThemeContext } from '~/presentation/context/ThemeContext';

export function PullToRefreshScreen() {
  const { colors } = React.useContext(ThemeContext);

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.text, 'blue']}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.text}
          onRefresh={onRefresh}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title text="Pull to refresh" safe />
    </ScrollView>
  );
}
