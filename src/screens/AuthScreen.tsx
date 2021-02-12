import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import Input, { Picker } from '../components/Input';
import NavigationButton from '../components/NavigationButton';
import useMessagingPermission from '../hooks/useMessagingPermission';

const styles = StyleSheet.create({
  appLogo: { marginBottom: 30 },
  inputContainer: { justifyContent: 'flex-start', alignItems: 'center' },
});

const AuthScreen = () => {
  useMessagingPermission();
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [phone, setPhone] = useState('');
  const isAllFill = ![name, studentId, department, phone].includes('');
  const beforeNavigate = () => {
    setName('');
    setStudentId('');
    setDepartment('');
    setPhone('');
  };
  return (
    <CustomSafeAreaView>
      <View style={styles.inputContainer}>
        <Text style={styles.appLogo}>두두휴 App Logo</Text>
        <Input value={name} onChangeText={setName} placeholder="Name" />
        <Input value={studentId} onChangeText={setStudentId} placeholder="Student ID" keyboardType="number-pad" />
        <Picker value={department} onValueChange={setDepartment} />
        <Input value={phone} onChangeText={setPhone} placeholder="Phone Number" keyboardType="numeric" />
      </View>
      <NavigationButton navigateTo="Verify" text="인증번호 요청" disabled={!isAllFill} beforeNavigate={beforeNavigate} />
    </CustomSafeAreaView>
  );
};

export default React.memo(AuthScreen);
