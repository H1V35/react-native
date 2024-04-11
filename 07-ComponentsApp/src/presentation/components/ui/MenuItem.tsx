import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Separator } from './Separator';

import { colors } from '~/config/theme/theme';

interface Props {
  name: string;
  icon: string;
  component: string;

  isFirst?: boolean;
  isLast?: boolean;
}

export function MenuItem({ name, icon, component, isFirst = false, isLast = false }: Props) {
  const navigation = useNavigation<any>();

  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View
          style={{
            ...styles.container,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
            backgroundColor: colors.cardBackground,
          }}>
          <Ionicons name={icon} size={25} style={{ marginRight: 10 }} color={colors.primary} />
          <Text style={{ color: colors.text }}>{name}</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={25}
            style={{ marginLeft: 'auto' }}
            color={colors.primary}
          />
        </View>
      </Pressable>

      {!isLast && <Separator />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
