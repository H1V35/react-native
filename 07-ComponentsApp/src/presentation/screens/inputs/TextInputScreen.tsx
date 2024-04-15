import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { Card } from '~/presentation/components/ui/Card';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { Title } from '~/presentation/components/ui/Title';
import { ThemeContext } from '~/presentation/context/ThemeContext';

export function TextInputScreen() {
  const { colors } = React.useContext(ThemeContext);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="TextInputScreen" safe />

          <Card>
            <TextInput
              style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
              placeholder="Name"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />

            <TextInput
              style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
              placeholder="Email"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <TextInput
              style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
              placeholder="Phone number"
              placeholderTextColor={colors.textSecondary}
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <TextInput
              style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
              placeholder="Phone number"
              placeholderTextColor={colors.textSecondary}
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>
        </CustomView>

        <View style={{ height: 30 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
