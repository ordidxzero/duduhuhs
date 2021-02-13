import React from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContextState } from '../lib/context';
import AppLogo from './AppLogo';

const CustomSafeAreaView: React.FC = ({ children }) => {
  const {
    darkMode,
    theme: {
      customSafeAreaView: { theme },
    },
  } = useContextState();
  return (
    <SafeAreaView style={[styles.container, theme.container]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <AppLogo />
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
        <ScrollView keyboardDismissMode="on-drag" contentContainerStyle={styles.scrollView}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  keyboardAvoidingView: { flex: 1 },
  scrollView: { flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingTop: 20 },
});

export default CustomSafeAreaView;
