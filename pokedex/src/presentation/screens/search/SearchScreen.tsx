import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalTheme } from '~/config/theme/global-theme';
import { Pokemon } from '~/domain/entities/pokemon';
import { PokemonCard } from '~/presentation/components/pokemons/PokemonCard';
import { BackButton } from '~/presentation/components/ui/BackButton';
import { ThemeContext } from '~/presentation/context/ThemeContext';
import { RootStackParams } from '~/presentation/navigator/StackNavigator';

export function SearchScreen() {
  const { theme } = React.useContext(ThemeContext);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const { top } = useSafeAreaInsets();

  return (
    <View style={[globalTheme.globalMargin, { paddingTop: top + 20 }]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}>
        <BackButton color={theme.colors.text} size={45} onPress={() => navigation.goBack()} />
        <TextInput
          placeholder="Search Pokémon"
          mode="flat"
          autoFocus
          autoCorrect={false}
          onChangeText={(value) => console.log(value)}
          selectionColor={theme.colors.text}
          activeUnderlineColor={theme.colors.text}
          style={{
            backgroundColor: 'transparent',
            flexGrow: 1,
            fontSize: 28,
            marginRight: 5,
          }}
        />
      </View>

      <ActivityIndicator color={theme.colors.text} size={30} style={{ paddingTop: 20 }} />

      <FlatList
        data={[] as Pokemon[]}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
}
