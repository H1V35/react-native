import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { globalStyles } from '~/config/theme/theme';
import { PrimaryButton } from '~/presentation/components/shared/PrimaryButton';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
];

export function ProductsScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            label={item.name}
            onPress={() => navigation.navigate('Product' as never)}
          />
        )}
      />

      <Text style={{ marginBottom: 10, fontSize: 30 }}>Settings</Text>

      <PrimaryButton label="Settings" onPress={() => navigation.navigate('Settings' as never)} />
    </View>
  );
}
