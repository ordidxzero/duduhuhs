import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import Input, { Picker } from '../components/Input';
import NavigationButton from '../components/NavigationButton';
import useInput from '../hooks/useInput';
import useMessagingPermission from '../hooks/useMessagingPermission';
import usePhoneAuth from '../hooks/usePhoneAuth';

const AuthScreen = () => {
  useMessagingPermission();
  const { signInWithPhoneNumber } = usePhoneAuth();
  const { input, setInput } = useInput();
  return (
    <CustomSafeAreaView>
      <View style={styles.inputContainer}>
        <Input value={input.name} onChangeText={setInput('name')} placeholder="Name" />
        <Input value={input.studentId} onChangeText={setInput('studentId')} placeholder="Student ID" keyboardType="number-pad" />
        <Picker value={input.department} onValueChange={setInput('department')} />
        <Input value={input.phone} onChangeText={setInput('phone')} placeholder="Phone Number" keyboardType="numeric" />
      </View>
      <NavigationButton
        navigateTo="Verify"
        text="인증번호 요청"
        disabled={Object.values(input).includes('') || input.phone.length !== 11}
        beforeNavigate={signInWithPhoneNumber}
      />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: { justifyContent: 'flex-start', alignItems: 'center' },
});

export default React.memo(AuthScreen);
