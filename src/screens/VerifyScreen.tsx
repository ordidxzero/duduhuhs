import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import NavigationButton from '../components/NavigationButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Dimensions.get('screen').height,
  },
  appLogo: { marginBottom: 30 },
  inputContainer: { justifyContent: 'flex-start', alignItems: 'center' },
});

const VerifyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.appLogo}>두두휴 App Logo</Text>
        <Input placeholder="Verification Number" keyboardType="numeric" />
      </View>
      <NavigationButton navigateTo="Matching" text="인증번호 재요청" />
    </SafeAreaView>
  );
};

export default VerifyScreen;
