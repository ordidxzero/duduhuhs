import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import Input from '../components/Input';
import NavigationButton from '../components/NavigationButton';

const styles = StyleSheet.create({
  appLogo: { marginBottom: 30 },
  inputContainer: { justifyContent: 'flex-start', alignItems: 'center' },
});

const AuthScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.inputContainer}>
        <Text style={styles.appLogo}>두두휴 App Logo</Text>
        <Input placeholder="Name" />
        <Input placeholder="Student ID" keyboardType="number-pad" />
        <Input placeholder="Department" />
        <Input placeholder="Phone Number" keyboardType="numeric" />
      </View>
      <NavigationButton navigateTo="Verify" text="인증번호 요청" />
    </CustomSafeAreaView>
  );
};

export default AuthScreen;
