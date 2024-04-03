import { type RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { type RootStackParams } from '~/presentation/routes/StackNavigator';

export function ProductScreen() {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: params.item.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>

      <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
        {params.item.id} - {params.item.name}
      </Text>
    </View>
  );
}
