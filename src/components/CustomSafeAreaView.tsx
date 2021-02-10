import React from 'react';
import { KeyboardAvoidingView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeState } from '../lib/context';

const CustomSafeAreaView: React.FC = ({ children }) => {
  const {
    darkMode,
    theme: {
      customSafeAreaView: { theme },
    },
  } = useThemeState();
  return (
    <SafeAreaView style={[styles.container, theme.container]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  keyboardAvoidingView: { flex: 1, alignItems: 'center', justifyContent: 'space-between' },
});

export default CustomSafeAreaView;
