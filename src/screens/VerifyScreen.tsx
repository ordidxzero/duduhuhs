import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import Input from '../components/Input';
import NavigationButton from '../components/NavigationButton';
import usePhoneAuth from '../hooks/usePhoneAuth';
import { NAVIGATION_BUTTON_OTHER_BACKGROUND_COLOR } from '../lib/color.constant';

const styles = StyleSheet.create({
  appLogo: { marginBottom: 30 },
  inputContainer: { justifyContent: 'flex-start', alignItems: 'center' },
});

const VerifyScreen = () => {
  const { firebaseAuthConfirmation } = usePhoneAuth();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const buttonMode = {
    text: code ? '인증하기' : '인증번호 재요청',
    customBgColor: code ? '' : NAVIGATION_BUTTON_OTHER_BACKGROUND_COLOR,
  };
  const beforeNavigate = () => setCode('');
  const confirmCode = async () => {
    try {
      if (firebaseAuthConfirmation) {
        await firebaseAuthConfirmation.confirm(code);
        setError('OK! Success!!!');
      } else {
        setError('Confirmation is null');
      }
    } catch {
      setError('Invalid code.');
    }
  };
  return (
    <CustomSafeAreaView>
      <View style={styles.inputContainer}>
        <Text style={styles.appLogo}>두두휴 App Logo</Text>
        <Input value={code} onChangeText={setCode} placeholder="Verification Number" keyboardType="numeric" />
      </View>
      <Text>{error}</Text>
      <TouchableOpacity onPress={confirmCode}>
        <Text>Verify Phone</Text>
      </TouchableOpacity>
      <NavigationButton
        navigateTo="Matching"
        text={buttonMode.text}
        customBgColor={buttonMode.customBgColor}
        beforeNavigate={beforeNavigate}
      />
    </CustomSafeAreaView>
  );
};

export default React.memo(VerifyScreen);
