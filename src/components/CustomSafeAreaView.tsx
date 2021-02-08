import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  keyboardAvoidingView: { flex: 1, alignItems: 'center', justifyContent: 'space-between' },
});

const CustomSafeAreaView: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
