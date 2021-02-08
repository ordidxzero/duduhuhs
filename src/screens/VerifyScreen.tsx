import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import Input from '../components/Input';
import NavigationButton from '../components/NavigationButton';
import { NAVIGATION_BUTTON_OTHER_BACKGROUND_COLOR } from '../lib/color.constant';

const styles = StyleSheet.create({
  appLogo: { marginBottom: 30 },
  inputContainer: { justifyContent: 'flex-start', alignItems: 'center' },
});

const VerifyScreen = () => {
  const [input, setInput] = useState('');
  const buttonMode = {
    text: input ? '인증하기' : '인증번호 재요청',
    customBgColor: input ? '' : NAVIGATION_BUTTON_OTHER_BACKGROUND_COLOR,
  };
  const beforeNavigate = () => setInput('');
  return (
    <CustomSafeAreaView>
      <View style={styles.inputContainer}>
        <Text style={styles.appLogo}>두두휴 App Logo</Text>
        <Input value={input} onChangeText={setInput} placeholder="Verification Number" keyboardType="numeric" />
      </View>
      <NavigationButton
        navigateTo="Matching"
        text={buttonMode.text}
        customBgColor={buttonMode.customBgColor}
        beforeNavigate={beforeNavigate}
      />
    </CustomSafeAreaView>
  );
};

export default VerifyScreen;
