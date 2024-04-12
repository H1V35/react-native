import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';

import { globalStyles } from '~/config/theme/theme';
import { Card } from '~/presentation/components/ui/Card';
import { CustomView } from '~/presentation/components/ui/CustomView';
import { Title } from '~/presentation/components/ui/Title';

export function TextInputScreen() {
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
              style={globalStyles.input}
              placeholder="Name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Phone number"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Phone number"
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
