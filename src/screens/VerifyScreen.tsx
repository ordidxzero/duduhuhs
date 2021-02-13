import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import Input from '../components/Input';
import VerifyButton from '../components/VerifyButton';

const styles = StyleSheet.create({
  inputContainer: { justifyContent: 'flex-start', alignItems: 'center' },
});

const VerifyScreen = () => {
  const [code, setCode] = useState('');
  const beforeNavigate = () => setCode('');

  return (
    <CustomSafeAreaView>
      <View style={styles.inputContainer}>
        <Input value={code} onChangeText={setCode} placeholder="Verification Number" keyboardType="numeric" />
      </View>
      <VerifyButton code={code} beforeNavigate={beforeNavigate} />
    </CustomSafeAreaView>
  );
};

export default React.memo(VerifyScreen);
